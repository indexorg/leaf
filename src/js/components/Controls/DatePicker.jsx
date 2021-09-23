import React, { useState, useEffect } from 'react'
var dayjs = require('dayjs')
import _get from 'lodash/get'

import Icon from '../Icon'

import Color from '../Color'
import Button from '../Layout/Button'
import Grid from '../Layout/Grid'
import Form from '../Form'
import Spacer from '../Layout/Spacer'
import Text from '../Layout/Text'
import View from '../Layout/View'
import XStack from '../Layout/XStack'
import ZStack from '../Layout/ZStack'

const checkIsSelected = (dateString, date) => {
    // console.log(dateString, date)
    if (date) {
        if (
            date.format('M D YYYY') == new dayjs(dateString).format('M D YYYY')
        ) {
            return true
        }
    }

    return false
}

const checkIsInSelectedRange = (date, startDate, endDate) => {
    if (endDate) {
        const startOfEndDate = new dayjs(endDate).startOf('day')

        if (date.isBefore(startOfEndDate) && date.isAfter(startDate)) {
            return true
        }
    }

    return false
}

const checkValidTime = (time) => {
    return /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/.test(time)
}

const DateInput = ({ allowRange = true, date = false, handleChange }) => {
    const [value, setValue] = useState('')
    const [invalid, setInvalid] = useState(false)

    useEffect(() => {
        if (!allowRange) {
            setValue(
                date
                    ? date.format('MM/DD/YYYY')
                    : new dayjs().format('MM/DD/YYYY')
            )
        }
    }, [date])

    useEffect(() => {
        let timer

        timer = setTimeout(() => {
            if (value.length == 0) {
                const today = new dayjs()

                setInvalid(false)

                handleChange({
                    date: today.date(),
                    month: today.month(),
                    year: today.year(),
                })
            } else {
                const checkDate = new dayjs(value)

                if (checkDate.isValid() && value.length == 10) {
                    setInvalid(false)

                    handleChange({
                        date: checkDate.date(),
                        month: checkDate.month(),
                        year: checkDate.year(),
                    })
                } else {
                    if (!checkDate.isValid()) {
                        setInvalid(true)
                    }
                }
            }
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [value])

    return (
        <label
            className={`
            flex
            h-10
            rounded-lg
            text-md

            md:h-9
            
            ${
                invalid
                    ? 'bg-warning bg-opacity-10'
                    : 'bg-black-800 bg-opacity-50'
            }
        `}
        >
            <span
                className={`
                font-medium
                h-full
                flex
                items-center
                pl-3
                ${invalid ? 'text-warning' : 'text-black'}
            `}
            >
                Date
            </span>

            <input
                className={`
                appearance-none
                !bg-transparent
                !border-none
                font-medium
                
                !rounded-none
                !pr-3
                !pl-2
                shadow-none
                text-mobile-input
                w-full
                
                md:text-md
                
                ${invalid ? 'text-warning' : 'text-black'}
            `}
                onChange={(e) => {
                    setValue(e.target.value)
                }}
                placeholder="mm/dd/yyyy"
                value={value}
            />
        </label>
    )
}

const TimeInput = ({ date, handleChange }) => {
    const [value, setValue] = useState('')
    const [meridian, setMeridian] = useState('am')
    const [invalid, setInvalid] = useState(false)

    useEffect(() => {
        setValue(date.format('hh:mm'))
        setMeridian(date.format('a'))
    }, [date])

    const checkValue = (value, meridian) => {
        if (value.length != 0) {
            const validTime = checkValidTime(value)

            if (validTime) {
                setInvalid(false)

                const times = value.split(':')
                const minutes = times[1]
                let hour = Number(times[0])

                if (hour <= 12 && hour != 0 && meridian == 'pm') {
                    hour = hour + 12
                }

                if (hour == 12 && meridian == 'am') {
                    hour = 0
                }

                handleChange({
                    hour,
                    minutes,
                })
            } else {
                setInvalid(true)
            }
        } else {
            setInvalid(false)

            handleChange({
                hour: 0,
                minutes: 0,
            })
        }
    }

    return (
        <ZStack>
            <Form.ControlledInput
                handleChange={(value) => {
                    setValue(value)
                    checkValue(value, meridian)
                }}
                invalid={invalid}
                label="time"
                placeholder="hh:mm"
                value={value}
            />

            <View
                alignSelf="center"
                justifySelf="end"
                frame={{
                    width: 32,
                }}
                padding={{
                    trailing: 12,
                }}
            >
                <Button
                    style="plain"
                    foreground={Color('Primary').fill()}
                    handleClick={() => {
                        const newMeridian = meridian == 'am' ? 'pm' : 'am'
                        setMeridian(newMeridian)
                        checkValue(value, newMeridian)
                    }}
                >
                    {meridian}
                </Button>
            </View>
        </ZStack>
    )
}

const DatePickerHeader = ({ date = null, setDate = undefined }) => (
    <React.Fragment>
        <Button
            handleClick={() => {
                setDate(date.subtract(1, 'month'))
            }}
            style="plain"
        >
            <Icon.ChevronLeft color="#0071A1" />
        </Button>

        <Text
            foreground={Color('Text').fill()}
            padding={{
                horizontal: 12,
            }}
            size={14}
            weight={400}
        >
            {date.format('MMMM YYYY')}
        </Text>

        <Button
            handleClick={() => {
                setDate(date.add(1, 'month'))
            }}
            style="plain"
        >
            <Icon.ChevronRight color="#0071A1" />
        </Button>

        <Spacer />

        <Button
            handleClick={() => {
                setDate(new dayjs())
            }}
            small
        >
            Today
        </Button>
    </React.Fragment>
)

const Calendar = ({
    allowRange = true,
    headings = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    onChange = undefined,
    size = 'small',

    startDate,
    endDate,
    today,
    month,
    year,
    daysInMonth,

    daysInLastMonth,
    dayOfWeek,
}) => {
    return (
        <Grid columns={7} padding={{ top: 12 }}>
            {headings
                .map((i, index) => (
                    <Text
                        key={index}
                        align="center"
                        casing="allcaps"
                        foreground={Color('AccessibleGray').fill()}
                        padding={{
                            vertical: 4,
                        }}
                        size={12}
                        weight={500}
                    >
                        {i}
                    </Text>
                ))
                .concat(
                    Array.from(Array(dayOfWeek), (x, index) => {
                        return (
                            <Text
                                key={index}
                                align="center"
                                foreground={Color('AccessibleGray').opacity(
                                    0.5
                                )}
                                padding={{
                                    vertical: size == 'small' ? 4 : 8,
                                }}
                                size={13}
                                weight={500}
                            >
                                {daysInLastMonth - dayOfWeek + index + 1}
                            </Text>
                        )
                    })
                )
                .concat(
                    Array.from(Array(daysInMonth), (x, index) => {
                        const isToday =
                            today.format('M D YYYY') ==
                            new dayjs(`${month} ${index + 1}, ${year}`).format(
                                'M D YYYY'
                            )
                        const isStartDate = checkIsSelected(
                            `${month} ${index + 1}, ${year}`,
                            startDate
                        )
                        const isStartDateWithRange =
                            checkIsSelected(
                                `${month} ${index + 1}, ${year}`,
                                startDate
                            ) && endDate
                        const isEndDate = checkIsSelected(
                            `${month} ${index + 1}, ${year}`,
                            endDate
                        )
                        const isInSelectedRange = checkIsInSelectedRange(
                            new dayjs(`${month} ${index + 1}, ${year}`),
                            startDate,
                            endDate
                        )

                        return (
                            <Button
                                key={index}
                                align="center"
                                background={
                                    isStartDate ||
                                    isStartDateWithRange ||
                                    isEndDate ||
                                    isInSelectedRange
                                        ? Color('Primary').opacity(0.1)
                                        : 'transparent'
                                }
                                foreground={
                                    isToday ||
                                    isStartDate ||
                                    isStartDateWithRange ||
                                    isEndDate ||
                                    isInSelectedRange
                                        ? Color('Primary').fill()
                                        : Color('Text').fill()
                                }
                                handleClick={() => {
                                    const selected = new dayjs(
                                        `${month} ${index + 1}, ${year}`
                                    )

                                    console.log(selected)

                                    if (!allowRange) {
                                        onChange(selected)
                                    } else {
                                        if (!endDate && !startDate) {
                                            onChange({
                                                start: selected,
                                                end: endDate,
                                            })
                                        } else {
                                            if (
                                                startDate &&
                                                selected.isAfter(startDate)
                                            ) {
                                                if (
                                                    endDate &&
                                                    selected.isSame(endDate)
                                                ) {
                                                    onChange({
                                                        start: startDate,
                                                        end: null,
                                                    })
                                                } else {
                                                    onChange({
                                                        start: startDate,
                                                        end: selected,
                                                    })
                                                }
                                            } else if (
                                                startDate &&
                                                selected.isSame(startDate)
                                            ) {
                                                onChange({
                                                    start: null,
                                                    end: null,
                                                })
                                            } else {
                                                onChange({
                                                    start: selected,
                                                    end: null,
                                                })
                                            }
                                        }
                                    }
                                }}
                                padding={{
                                    vertical: size == 'small' ? 4 : 8,
                                }}
                                radius={{
                                    all:
                                        isToday ||
                                        isStartDate ||
                                        isStartDateWithRange ||
                                        isEndDate
                                            ? 20
                                            : 0,
                                    trailing: isStartDateWithRange ? 0 : false,
                                    leading: isEndDate ? 0 : false,
                                }}
                                size={13}
                                style="plain"
                                weight={500}
                            >
                                {index + 1}
                            </Button>
                        )
                    })
                )}
        </Grid>
    )
}

const RangeDate = ({ date, onChange, size }) => {
    // local date is used for changing months, etc without requiring an actual date change
    // which might trigger filters etc
    // the local date is set to the current date on load, but then is on its own
    const [localDate, setLocalDate] = useState(new dayjs())

    useEffect(() => {
        setLocalDate(_get(date, 'start') ? new dayjs(date.start) : new dayjs())
    }, [])

    return (
        <div>
            <div className="pb-3">
                <DateInput
                    allowRange={true}
                    date={date}
                    handleChange={(value) => {
                        // sets day/month/year
                        setLocalDate(
                            localDate
                                .set('year', value.year)
                                .set('month', value.month)
                                .set('date', value.date)
                        )
                    }}
                />
            </div>

            <div
                className="
                flex
                items-center
            "
            >
                <DatePickerHeader
                    date={localDate}
                    setDate={(value) => {
                        setLocalDate(value)
                    }}
                />
            </div>

            <Calendar
                date={date}
                headings={
                    size == 'small'
                        ? ['S', 'M', 'T', 'W', 'T', 'F', 'S']
                        : ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
                }
                localDate={localDate}
                onChange={onChange}
                size={size}
                startDate={_get(date, 'start') ? new dayjs(date.start) : null}
                endDate={_get(date, 'end') ? new dayjs(date.end) : null}
                today={new dayjs()}
                month={localDate.format('MMMM')}
                year={localDate.year()}
                daysInMonth={localDate.daysInMonth()}
                daysInLastMonth={localDate.subtract(1, 'month').daysInMonth()}
                dayOfWeek={localDate.startOf('month').day()}
            />
        </div>
    )
}

const SingleDate = ({ date, onChange, size, timePicker }) => {
    // local date is used for changing months, etc without requiring an actual date change
    // which might trigger filters etc
    // the local date is set to the current date on load, but then is on its own
    const [localDate, setLocalDate] = useState(new dayjs())

    useEffect(() => {
        setLocalDate(date ? new dayjs(date) : new dayjs())
    }, [])

    console.log(date)

    const dateField = (
        <DateInput
            allowRange={false}
            date={date}
            handleChange={(value) => {
                setLocalDate(
                    localDate
                        .set('year', value.year)
                        .set('month', value.month)
                        .set('date', value.date)
                )

                const newDate = new dayjs()
                    .set('year', value.year)
                    .set('month', value.month)
                    .set('date', value.date)
                const isSameDate =
                    newDate.format('MM/DD/YYYY') == date.format('MM/DD/YYYY')

                // we don't want to update a range value if it's the same day
                if (!isSameDate) {
                    onChange(
                        date
                            .set('year', value.year)
                            .set('month', value.month)
                            .set('date', value.date)
                    )
                }
            }}
        />
    )

    const timeField = (
        <TimeInput
            date={date}
            handleChange={(value) => {
                console.log(value)
                const newDate = new dayjs()
                    .set('hour', value.hour)
                    .set('minute', value.minutes)

                const isSameDate =
                    newDate.format('HH:mm') == date.format('HH:mm')

                // value is hour/minute
                // get date and set time and pass through
                if (!isSameDate) {
                    onChange(
                        date
                            .set('hour', value.hour)
                            .set('minute', value.minutes)
                    )
                }
            }}
        />
    )

    return (
        <View>
            {size == 'small' && (
                <View>
                    {dateField}

                    {timePicker && (
                        <View
                            padding={{
                                vertical: 8,
                                bottom: 16,
                            }}
                        >
                            {timeField}
                        </View>
                    )}
                </View>
            )}

            {size == 'large' && (
                <XStack padding={{ bottom: 12 }}>
                    {dateField}

                    {timePicker && (
                        <View
                            padding={{
                                leading: 12,
                            }}
                            frame={{
                                width: 146,
                            }}
                        >
                            {timeField}
                        </View>
                    )}
                </XStack>
            )}

            <XStack
                padding={{
                    leading: 8,
                }}
            >
                <DatePickerHeader
                    date={localDate}
                    setDate={(value) => {
                        setLocalDate(value)
                    }}
                />
            </XStack>

            <Calendar
                allowRange={false}
                date={date}
                headings={
                    size == 'small'
                        ? ['S', 'M', 'T', 'W', 'T', 'F', 'S']
                        : ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']
                }
                localDate={localDate}
                onChange={(selected) => {
                    console.log(selected)
                    onChange(
                        date
                            .set('year', selected.get('year'))
                            .set('month', selected.get('month'))
                            .set('date', selected.get('date'))
                    )
                }}
                size={size}
                startDate={date}
                endDate={false}
                today={new dayjs()}
                month={localDate.format('MMMM')}
                year={localDate.year()}
                daysInMonth={localDate.daysInMonth()}
                daysInLastMonth={localDate.subtract(1, 'month').daysInMonth()}
                dayOfWeek={localDate.startOf('month').day()}
            />
        </View>
    )
}

const DatePicker = ({
    allowRange = true,
    date,
    onChange = undefined,
    size = 'small',
    timePicker = false,
}) => {
    if (allowRange) {
        return <RangeDate date={date} onChange={onChange} size={size} />
    } else {
        return (
            <SingleDate
                date={date}
                onChange={onChange}
                size={size}
                timePicker={timePicker}
            />
        )
    }
}

export default DatePicker

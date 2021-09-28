import React, {useState} from 'react'
import ReactDOM from 'react-dom'

import { 
    styled
} from './config/stitches';

const Container = styled('div', {
    backgroundColor: '$black100',
    fill: '',
    padding: '$16'
});

import Checkbox from './components/Controls/Checkbox'
import Button from './components/Form/Button'
import Input from './components/Form/Input'
import Select from './components/Form/Select'
import Text from './components/Text'

const App = () => {
    const [checked, setChecked] = useState(false)

    return(
        <Container>
            <Text
            as="h1"
            size="title">
                Page Title
            </Text>

            <Text
            size="heading"
            css={{
                paddingTop: '$4'
            }}>
                Heading
            </Text>

            <Text
            size="subheading"
            css={{
                paddingTop: '$4'
            }}>
                Subheading
            </Text>

            <Text
            size="body"
            css={{
                maxWidth: '$xl',
                paddingTop: '$2'
            }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>

            <Text
            size="label">
                label
            </Text>

            {/* <Checkbox 
            checked={checked}
            onClick={() => setChecked(!checked)} /> */}

            <Select
            options={
                [{
                    label: 'Option one',
                    value: 'hey'
                }]
            } 
            css={{
                marginTop: '$4'
            }} />

            <div
            >
                <Input 
                label="Email address"
                type="email"
                css={{
                    marginY: '$4'
                }} />
            </div>

            <div>
                <Button>
                    Default
                </Button>

                <Button
                size="small"
                css={{
                    marginLeft: '$1',
                }}>
                    Default — Small
                </Button>

                <Button
                size="tiny"
                css={{
                    marginLeft: '$1',
                }}>
                    Default — Tiny
                </Button>
            </div>

            <div>
                <Button
                variant="primary"
                css={{
                    marginTop: "$2"
                }}>
                    Primary
                </Button>

                <Button
                size="small"
                variant="primary"
                css={{
                    marginLeft: '$1',
                }}>
                    Primary — Small
                </Button>

                <Button
                size="tiny"
                variant="primary"
                css={{
                    marginLeft: '$1',
                }}>
                    Primary — Tiny
                </Button>
            </div>

            <div>
                <Button
                variant="warning"
                css={{
                    marginTop: "$2"
                }}>
                    Warning
                </Button>

                <Button
                size="small"
                variant="warning"
                css={{
                    marginLeft: '$1',
                }}>
                    Warning — Small
                </Button>

                <Button
                size="tiny"
                variant="warning"
                css={{
                    marginLeft: '$1',
                }}>
                    Warning — Tiny
                </Button>
            </div>

            <div>
                
            </div>

            <div>
                
            </div>

        </Container>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
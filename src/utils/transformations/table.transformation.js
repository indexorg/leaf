export const getTrack = (track, columns) => {
    if(track) {
        if(track.length === columns.length) {
            return track.join(' ')
        }
    }
    
    return columns.map(c => '1fr').join(' ')
}
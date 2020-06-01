import moment from 'moment'

const timeFormat = time => (time ? moment(time).format('YYYY-MM-DD HH:mm') : null)

export { timeFormat }

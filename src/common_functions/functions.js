import moment from 'moment-timezone';

export const calculateLocalDate = date => {
	const today = new Date();
	const offset = -today.getTimezoneOffset() / 60;
	const m = moment(date);
	const localDate = m.utc().add(offset, 'hours').format('DD/MM/YYYY HH:mm:ss');

	return localDate;
};

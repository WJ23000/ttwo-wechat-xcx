import fetchRequest from '../utils/request'
const baseUrl = '/iot-service-course/api/course';

export function getGoodsList(query: { id: string }) {
	return fetchRequest({
		url: `${baseUrl}/list`,
		method: 'GET',
		params: query
	})
}

export function getCollection(data) {
	return fetchRequest({
		url: `${baseUrl}/collection`,
		method: 'POST',
		data
	})
}
import Webcom from 'webcom';

import {
	escapeForWebcom,
	unescapeForWebcom
} from './other';

if (typeof document === 'undefined') {
	global.__NAMESPACE__ = 'https://io.datasync.orange.com/base/bigbraintowerdev';
}

const ref = new Webcom(__NAMESPACE__);

const getScores = () => {
	return new Promise((resolve, reject) => {
		ref.child('scores').once('value', s => {
			const json = s.val() || [];
			const r = Object
				.keys(json || [])
				.map(id => ({
					name: unescapeForWebcom(json[id].name),
					val: Number(json[id].val)}))
				.reduce((acc, score) => {
					const existingScore = acc.find(s => s.name === score.name);
					if (existingScore && existingScore.val < score.val) {
						return [
							...acc.filter(s => s.name !== score.name),
							score
						];
					}
					else if (!existingScore) {
						return [
							...acc,
							score
						];
					}
					return acc;
				}, [])
			return resolve(r);
		});
	});
}

export const getBestScores = () => {
	return getScores()
		.then(scores => {
			return scores 
				.sort((a,b) => b.val - a.val)
				.slice(0,10);
		});
}

export const getBestScore = login => {
	return getScores()
		.then(scores => {
			const score = scores.find(score => score.name === escapeForWebcom(login));
			return (score && score.val) || 0;
		});
}

export const saveScore = (login, score) => {
	return new Promise(resolve => {
		ref.child('scores').push({
			name: escapeForWebcom(login),
			val: score
		}, () => {
			resolve();
		});
	});
} 


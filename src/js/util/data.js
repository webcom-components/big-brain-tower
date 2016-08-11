import Webcom from 'webcom';

const ref = new Webcom(`https://io.datasync.orange.com/base/bigbraintower`);

export const getHighestScores = () => {
	return new Promise((resolve, reject) => {
		ref.child('scores').once('value', s => {
			const json = s.val();
			const r = Object
				.keys(json || [])
				.map(username => ({
					name: username, 
					score: Number(json[username].score)}))
				.sort((a,b) => b.score - a.score)
				.slice(0,10);
			return resolve(r);
		});
	});
}
export const activityFormatter = (data) => {
	var stringWithEmoji = '';
	if (data.toLowerCase().includes('fish')) {
		stringWithEmoji = `🎣 ${data}`;
		return stringWithEmoji;
	}
	// TODO: swim, shop/store, camp, climb, cycl
	switch (data) {
		case 'Arts and Culture':
			stringWithEmoji = `🎨 ${data}`;
			break;

		case 'Astronomy':
			stringWithEmoji = `🌠 ${data}`;
			break;

		case 'Auto and ATV':
			stringWithEmoji = `🚘 ${data}`;
			break;

		case 'Biking':
			stringWithEmoji = `🚴 ${data}`;
			break;

		case 'Boating':
			stringWithEmoji = `⛵ ${data}`;
			break;

		case 'Camping':
			stringWithEmoji = `${data}`;
			break;

		case 'Canyoneering':
			stringWithEmoji = `${data}`;
			break;

		case 'Caving':
			stringWithEmoji = `${data}`;
			break;

		case 'Climbing':
			stringWithEmoji = `${data}`;
			break;

		case 'Compass and GPS':
			stringWithEmoji = `${data}`;
			break;

		case 'Dog Sledding':
			stringWithEmoji = `🐕 ${data}`;
			break;

		case 'Flying':
			stringWithEmoji = `${data}`;
			break;

		case 'Food':
			stringWithEmoji = `🍲 ${data}`;
			break;

		case 'Golfing':
			stringWithEmoji = `🏌 ${data}`;
			break;

		case 'Guided Tours':
			stringWithEmoji = `${data}`;
			break;

		case 'Hands-On':
			stringWithEmoji = `${data}`;
			break;

		case 'Hiking':
			stringWithEmoji = `${data}`;
			break;

		case 'Horse Trekking':
			stringWithEmoji = `🏇 ${data}`;
			break;

		case 'Hunting and Gathering':
			stringWithEmoji = `${data}`;
			break;

		case 'Ice Skating':
			stringWithEmoji = `${data}`;
			break;

		case 'Junior Ranger Program':
			stringWithEmoji = `${data}`;
			break;

		case 'Living History':
			stringWithEmoji = `${data}`;
			break;

		case 'Museum Exhibits':
			stringWithEmoji = `${data}`;
			break;

		case 'Paddling':
			stringWithEmoji = `${data}`;
			break;

		case 'Park Film':
			stringWithEmoji = `🎥 ${data}`;
			break;

		case 'Playground':
			stringWithEmoji = `${data}`;
			break;

		case 'SCUBA Diving':
			stringWithEmoji = `${data}`;
			break;

		case 'Shopping':
			stringWithEmoji = `${data}`;
			break;

		case 'Skiing':
			stringWithEmoji = `🎿 ${data}`;
			break;

		case 'Snorkeling':
			stringWithEmoji = `${data}`;
			break;

		case 'Snow Play':
			stringWithEmoji = `⛄ ${data}`;
			break;

		case 'Snowmobiling':
			stringWithEmoji = `${data}`;
			break;

		case 'Snowshoeing':
			stringWithEmoji = `${data}`;
			break;

		case 'Surfing':
			stringWithEmoji = `🏄 ${data}`;
			break;

		case 'Swimming':
			stringWithEmoji = `🏊 ${data}`;
			break;

		case 'Team Sports':
			stringWithEmoji = `🏅 ${data}`;
			break;

		case 'Tubing':
			stringWithEmoji = `${data}`;
			break;

		case 'Water Skiing':
			stringWithEmoji = `${data}`;
			break;

		case 'Wildlife Watching':
			stringWithEmoji = `🐻 ${data}`;
			break;

		case 'Bookstore and Park Store':
			stringWithEmoji = `${data}`;
			break;

		case 'Gift Shop and Souvenirs':
			stringWithEmoji = `${data}`;
			break;

		case 'Birdwatching':
			stringWithEmoji = `🐦 ${data}`;
			break;

		case 'Picnicking':
			stringWithEmoji = `🐻 ${data}`;
			break;

		default:
			stringWithEmoji = data;
			break;
	}
	return stringWithEmoji;
};
export default activityFormatter;

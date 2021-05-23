const Slack = require('slack-node');  // 슬랙 모듈 사용
require('dotenv').config()

apiToken = process.env.slack_auth;
const slack = new Slack(apiToken);

const send = async(message) => {
  slack.api('chat.postMessage',
  {
	  username: 'dev-test',  // 슬랙에 표시될 봇이름
    text:message,
	  channel:'#test',  // 전송될 채널 및 유저
	}, function(err, response){
	  console.log(response);
	});
}

send('메세지 \n내용');
  const uuid = PubNub.generateUUID();
  const pubnub = new PubNub({
    publishKey: "pub-c-44d0b197-2ebf-4ca0-941f-c6272ebb2901",
    subscribeKey: "sub-c-e609faec-1b29-11ec-9ca7-5693d1c31269",
    uuid: uuid
  });

  const button = document.getElementById('publish-button');

  button.addEventListener('click', () => {
    pubnub.publish({
      channel : "pubnub_onboarding_channel",
      message : {"sender": uuid, "content": "Hello From JavaScript SDK"}
    }, function(status, response) {
      //Handle error here
    });
  });

  pubnub.subscribe({
    channels: ['pubnub_onboarding_channel'],
    withPresence: true
  });

  pubnub.addListener({
    message: function(event) {
      let pElement = document.createElement('p');
      pElement.appendChild(document.createTextNode(event.message.content));
      document.body.appendChild(pElement);
    },
    presence: function(event) {
      let pElement = document.createElement('p');
      pElement.appendChild(document.createTextNode(event.uuid + " has joined. That's you!"));
      document.body.appendChild(pElement);
    }
  });

  pubnub.history(
    {
      channel: 'pubnub_onboarding_channel',
      count: 10,
      stringifiedTimeToken: true,
    },
    function (status, response) {
      let pElement = document.createElement('h3');
      pElement.appendChild(document.createTextNode('historical messages'));
      document.body.appendChild(pElement);

      pElement = document.createElement('ul');
      let msgs = response.messages;
      for (let i in msgs) {
        msg = msgs[i];
        let pElement = document.createElement('li');
        pElement.appendChild(document.createTextNode('sender: ' + msg.entry.sender + ', content: ' + msg.entry.content));
        document.body.appendChild(pElement);
      }
    }
  );

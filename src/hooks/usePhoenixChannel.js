
import { useState, useContext, useEffect } from 'react';

const useChannel = (socket, channelName, arrayEventCallback) => {
    const [channel, setChannel] = useState(null);

    useEffect(() => {

        const phoenixChannel = socket.channel(channelName);
        console.log(phoenixChannel)
        phoenixChannel.join().receive('ok', () => {
            console.log("ok")
            setChannel(phoenixChannel)
        }).receive("error", resp => { console.log("Unable to join", resp) })

        arrayEventCallback.forEach(({ event, callback }) => {
            phoenixChannel.on(event, callback);
        });
  

        return () => {
            phoenixChannel.leave();
        };
    }, []);
    // only connect to the channel once on component mount
    // by passing the empty array as a second arg to useEffect
    console.log(channel)
    return [channel];
};

export default useChannel;
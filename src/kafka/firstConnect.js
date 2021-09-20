const { Kafka } = require('kafkajs');

async function firstConnect(address) {
  let topics;
  let cluster;
  let error;
  try {
    const kafka = new Kafka({
      clientId: 'admin',
      brokers: [address],
    });

    const admin = kafka.admin();

    await admin.connect();

    // const topics = await admin.listTopics();
    console.log('Here are your kafka topics:');
    console.log(await admin.listTopics());
    topics = await admin.listTopics();
    cluster = await admin.describeCluster();

    await admin.disconnect();
  } catch (err) {
    console.log(`There was an error: ${err}`);
    error = err;
  } finally {
    if (cluster) return [cluster, topics];
    else return error;
  }
}

export default firstConnect;

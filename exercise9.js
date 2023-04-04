import { OPCUAClient} from "node-opcua";
// this wont work, unless you run : 
// npm install node-opcua 


let simpleRead = async () => {

    const client = OPCUAClient.create();

    console.log('Connecting');
    await client.connect("opc.tcp://Calums-MacBook-Pro.local:53530/OPCUA/SimulationServer");

    console.log('Creating Session');
    const session = await client.createSession();
    

    const nodeId = "ns=3;i=1003";
    const dataValue = await session.read({ nodeId });

    console.log(` value = ${dataValue.value.value.toString()}`);

    await client.disconnect();
};


simpleRead();
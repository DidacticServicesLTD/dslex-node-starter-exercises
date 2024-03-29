import { OPCUAClient} from "node-opcua";
// this wont work, unless you run : 
// npm install node-opcua 

let opcuaEndpoint = "opc.tcp://Calums-MacBook-Pro.local:53530/OPCUA/SimulationServer"
let nodeId = "ns=3;i=1003"


let simpleRead = async () => {

    const client = OPCUAClient.create();

    console.log('Connecting');
    await client.connect(opcuaEndpoint);

    console.log('Creating Session');
    const session = await client.createSession();
    
    console.log('Reading Value');
    const dataValue = await session.read({ nodeId });

    console.log(`value = ${dataValue.value.value.toString()}`);

    await client.disconnect();
};


simpleRead();

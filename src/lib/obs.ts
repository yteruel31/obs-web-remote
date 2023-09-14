import OBSWebSocket, {OBSRequestTypes} from 'obs-websocket-js';

let ws: OBSWebSocket;

export const obs = {
  get: () => ws,
  sendCommand: <Type extends keyof OBSRequestTypes>(
    requestType: Type,
    requestData: OBSRequestTypes[Type],
  ) => ws.call(requestType, requestData),
  set: (_ws: OBSWebSocket) => (ws = _ws),
};

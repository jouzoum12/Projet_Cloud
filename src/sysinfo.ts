import * as si from 'systeminformation';

export async function getSystemInfo() {
  const result = await Promise.all([
    si.cpu(),
    si.system(),
    si.mem(),
    si.osInfo(),
    si.currentLoad(),
    si.processes(),
    si.diskLayout(),
    si.networkInterfaces(),
  ]);

  return result;
}

import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const incidentlist = [
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180611-0101-102361', phoneNumber: '13297961234', address: '武大园一路0', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180610-0102-102362', phoneNumber: '13297962345', address: '武大园一路1', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180610-0103-102363', phoneNumber: '13297966578', address: '武大园一路2', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180611-0104-102364', phoneNumber: '13297963245', address: '武大园一路3', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180609-0105-102365', phoneNumber: '13256781234', address: '武大园一路4', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180609-0106-102366', phoneNumber: '13298701234', address: '武大园一路5', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180608-0107-102367', phoneNumber: '13297960098', address: '武大园一路6', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180608-0108-102368', phoneNumber: '13297968990', address: '武大园一路7', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180608-0109-102369', phoneNumber: '13212351234', address: '武大园一路8', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'},
      // tslint:disable-next-line:max-line-length
      { id: 'ECUCity-20180613-0110-102355', phoneNumber: '13211281234', address: '武大园一路9', status: 0, alarmName: 'zhans', incidentTime: '2018/06/25', description: 'aaaaa'}
    ];

    const resourcesPeople = [
      { resourcesId: '1', resourcesName: 'ZhangCeng'},
      { resourcesId: '2', resourcesName: 'LiLei'},
      { resourcesId: '3', resourcesName: 'WangXiao'},
      { resourcesId: '4', resourcesName: 'DongXue'},
      { resourcesId: '5', resourcesName: 'DaiLing'},
      { resourcesId: '6', resourcesName: 'DaWei'},
      { resourcesId: '7', resourcesName: 'WangXiao'}
    ];
    return {incidentlist, resourcesPeople};
  }
}

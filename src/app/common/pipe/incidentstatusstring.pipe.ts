import { Pipe, PipeTransform } from '@angular/core';
import { IncidentStatus } from '../model/IncidentStatus';

// 警情状态转换
@Pipe({ name: 'incidentStatusString' })
export class IncidentStatusStringPipe implements PipeTransform {
    constructor() {
    }

    transform(status: number) {
        switch (status) {
            case IncidentStatus.Pending:
                 return '未处置';
            case IncidentStatus.InProgress:
                 return '处置中';
            case IncidentStatus.Transfering:
                 return '处置完成';
            case IncidentStatus.HasTransfer:
                 return '转警中';
            case IncidentStatus.Finished:
                 return '未分配';
        }
    }
}
import { Injectable } from '@angular/core';

@Injectable()
// 事件发布与订阅属性
export class StringKey {

    public RefreshUnTreated = 'RefreshUnTreated';

    public ChangeTitle = 'ChangeTitle';

    public FileDirectoryCache = 'FileDirectoryCache';

    public TabsComponent = 'TabsComponent';

    public RefreshTaskListComponent = 'RefreshTaskListComponent';

    public JumpPage = 'JumpPage';

    public RefreshTaskCount = 'RefreshTaskCount';

    public User = 'User';

    public RefreshTaskMessageComponent = 'RefreshTaskMessageComponent';

    public HISTORYMESSAGEFILE = 'historymessage.json';

    public incidentId = 'incidentId';

}

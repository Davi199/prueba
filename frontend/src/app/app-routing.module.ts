import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Components
import { PersonasListComponent } from '@app/core/components/personas-list/personas-list.component';
import { PersonasCreateComponent } from '@app/core/components/personas-create/personas-create.component';
import { PersonasUpdateComponent } from '@app/core/components/personas-update/personas-update.component';

const routes: Routes = [
    {
        path:'list',
        component:PersonasListComponent
    },
    {
        path:'add',
        component:PersonasCreateComponent
    },
    {
        path:'edit',
        component:PersonasUpdateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }
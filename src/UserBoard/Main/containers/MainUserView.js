import React from 'react'
import { Navigation } from '../components/Navigation'
import {UsersView} from '../../Users/containers/UsersView'
import {TasksView} from '../../Tasks/containers/TasksView'
import {SummaryView} from '../../Main/containers/SummaryView'
import {KanbanView} from '../../Kanban/containers/KanbanView'
import {SprintsView} from '../../Sprints/containers/SprintsView'

import { Route, Switch } from 'react-router-dom'


export const MainUserView = () => {


    return (
        <div>
            <Navigation />

            <Switch>
<Route path="/mainuserview/users" component={UsersView} />
<Route path="/mainuserview/tasks" component={TasksView}/>
<Route path="/mainuserview/kanban" component={KanbanView}/>
<Route path="/mainuserview/sprints" component={SprintsView}/>


<Route exact path="/mainuserview" component={SummaryView}/>


</Switch>

            
        </div>

    )
}

import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Task } from './models/task.model'
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TasksService {
    private tasks: Task[] = [];
    private idCount = 1;

    getAllTasks(){
        return this.tasks;
    }

    createTask(createTaskDto : CreateTaskDto){
        const {title,description} = createTaskDto;

        const task = {
            id: this.idCount,
            title,
            description,
            isCompleted:false
        }

        this.tasks.push(task);
        this.idCount++;
        return task;
    }

    getTaskById(id :number){
        const task = this.tasks.find(task=>task.id === id);
        if(!task){
            throw new NotFoundException(`Task with ID ${id} not found`);
        }
        return task
    }

    deleteTask(id:number){
        const task = this.getTaskById(id);
        this.tasks = this.tasks.filter(task=>task.id !== id)
        
        return task
    }

    updateTask(id:number, updateTaskDto:UpdateTaskDto){
        if('id' in updateTaskDto){
            throw new BadRequestException('Updating task ID is not allowed');
        }

        this.tasks = this.tasks.map(task=>{
            if(task.id === id){
                return {...task, ...updateTaskDto}
            }
            return task;
        })


        return this.getTaskById(id);
    }

}

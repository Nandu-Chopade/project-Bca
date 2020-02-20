import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
    name: 'Myupper'
})

export class MyUpperPipe implements PipeTransform {
    transform( value : string , kind : string, txt : string ){
		if(kind === 'upper'){
			value = value.toUpperCase();
		}
		else
		{
			value = value.toLowerCase();
			
	   }	
	   return value ;
		
		

        
    }
}









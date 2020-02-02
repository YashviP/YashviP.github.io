function precedence(op) { 

    if(op == '+'||op == '-') 
    	return 1; 
    if(op == '*'||op == '/') 
        return 2;  
    if(op =='√')
        return 3;
    return 0; 
} 

function applyOp(value1,op,value2=0) { 

	if(op=="+") {

		return value1+value2;
	}
	if(op=="-") {

		return value1-value2;
	}
	if(op=="/") {

		return value1/value2;
	}
	if(op=="*") {

		return value1*value2;
	}
    if(op=="√") {

        return Math.sqrt(value1);
    }
	
}


function evaluate(expr) {

	operator_stack=[];
	values_stack=[];

	for(var i=0;i<expr.length;i++)
	{
		if(expr[i]==' ') {

			continue;
		}

		else if(expr[i] == '(') { 

            operator_stack.push(expr[i]); 
        } 

        else if(expr[i]>='0' && expr[i]<='9') {

        	var val = 0; 
              
           
            while(i < expr.length &&  (expr[i]>='0' && expr[i]<='9')) { 

                val = (val*10) + (expr[i]-'0'); 
                i++; 

            } 

            i--;
            values_stack.push(val); 

        }

        else if(expr[i] == ')') { 

            while(operator_stack.length>0 && operator_stack[operator_stack.length-1]!= '(') { 

            	var op = operator_stack[operator_stack.length-1]; 
                operator_stack.pop();

                if(op=='√')
                {
                    var val1=values_stack[values_stack.length-1]; 
                    values_stack.pop();
                    values_stack.push(applyOp(val1,op)); 
                }
                else
                {
               
                    var val2 = values_stack[values_stack.length-1]; 
                    values_stack.pop(); 
                  
                    var val1 = values_stack[values_stack.length-1]; 
                    values_stack.pop(); 

                    values_stack.push(applyOp(val1,op,val2)); 
                }

            } 
              
            if(operator_stack.length>0) 
               operator_stack.pop(); 
        } 

        else
        { 
            
            
            while(operator_stack.length > 0 && precedence(operator_stack[operator_stack.length-1]) >= precedence(expr[i])) { 

            	var op = operator_stack[operator_stack.length-1];
            	operator_stack.pop();

                if(op=='√')
                {
                    var val1=values_stack[values_stack.length-1]; 
                    values_stack.pop();
                    values_stack.push(applyOp(val1,op)); 
                }
                else
                {
            	
            		var val2=values_stack[values_stack.length-1];
            		values_stack.pop();

            		var val1=values_stack[values_stack.length-1];
            		values_stack.pop();
            		values_stack.push(applyOp(val1, op,val2)); 
            	}     
            } 
            
            operator_stack.push(expr[i]); 
        } 

    }

	while(operator_stack.length>0) { 

		var op = operator_stack[operator_stack.length-1]; 
        operator_stack.pop(); 

        if(op=='√')
        {
            var val1=values_stack[values_stack.length-1]; 
            values_stack.pop();
            values_stack.push(applyOp(val1,op)); 
        }
        else 
        {  
       
        	var val2=values_stack[values_stack.length-1];
        	values_stack.pop();

        	var val1=values_stack[values_stack.length-1];
        	values_stack.pop();

        	values_stack.push(applyOp(val1,op,val2)); 
        }
     
    }  
     
    if(values_stack.length>1)
    	return NaN;

    return values_stack[values_stack.length-1]; 

}


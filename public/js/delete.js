	const btn = document.getElementById('btn');
	const txt = document.getElementById('txt');
	btn.addEventListener('click',function(){
	    const choice = window.confirm('Click Complete');
	    if(choice){
		          document.getElementById('form_delete').submit()
	    }
		          
		})
var data = document.getElementsByTagName('faq');
                for(var i = 0; i < data.length; i++){
                    var values = data[i].getAttribute('data-filter');
                    if(values.indexOf(filter) < 0){
                        data[i].style.display='none';
                    } else {
                        data[i].style.display='inline-block';
                    }
                }
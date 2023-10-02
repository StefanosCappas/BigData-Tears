'use-strict'
{   
    var array = [];
    var brray = [];
    var crray = [];
    var drray = [];
    var erray = [];
    var a_row = 0;
    var index = 0;
    var start = 0;
    var finish = 20;
    var sizee = 20;
    var column1 = 0;
    var column2 = 0;
    var column3 = 0;
    var column4 = 0;
    var column5 = 0;
    window.addEventListener('load', function() 
    {
        var upload = document.getElementById('fileInput');
        if (upload) 
        {
            upload.addEventListener('change', function() 
            {
                a_row = 0;
                array = [];
                brray = [];
                crray = [];
                drray = [];
                erray = [];
                if (upload.files.length > 0) 
                {
                    var reader = new FileReader();
                    reader.addEventListener('load', function() 
                    {   
                        var result = JSON.parse(reader.result);
                        while(a_row < 62)
                        {   
                            array.push(result[a_row].countryValue + '<br>');
                            brray.push(result[a_row].date + '<br>');
                            result[a_row].gdp = result[a_row].gdp.toFixed(2);
                            crray.push(result[a_row].gdp + '<br>');
                            drray.push(result[a_row].population + '<br>');
                            result[a_row].gdpPerCapita = result[a_row].gdpPerCapita.toFixed(4);
                            erray.push(result[a_row].gdpPerCapita + '<br>');
                            a_row += 1;
                        }
                        appear(start, finish);
                    });
                    reader.readAsText(upload.files[0]);
                }
            });
        }
    });
    function sort(array, brray, crray, drray, erray, i, j)
    {
        temp1 = array[i];
        array[i] = array[j];
        array[j] = temp1;
        temp2 = brray[i];
        brray[i] = brray[j];
        brray[j] = temp2;
        temp3 = crray[i];
        crray[i] = crray[j];
        crray[j] = temp3;
        temp4 = drray[i];
        drray[i] = drray[j];
        drray[j] = temp4;
        temp5 = erray[i];
        erray[i] = erray[j];
        erray[j] = temp5;
    }
    function appear(start, finish)
    {
        document.getElementById("col1").innerHTML = '';
        document.getElementById("col2").innerHTML = '';
        document.getElementById("col3").innerHTML = '';
        document.getElementById("col4").innerHTML = '';
        document.getElementById("col5").innerHTML = '';
        for (var i = start; i < finish; i++)
        {
            if (column1 == 0)
            {
                document.getElementById('sort 1').innerHTML = "countryValue";
                document.getElementById("col1").innerHTML += array[i];
            }
            if (column1 == 1)
            {
                document.getElementById("sort 1").innerHTML = '';
                document.getElementById("col1").innerHTML = '';
            }
            if (column2 == 0)
            {
                document.getElementById('sort 2').innerHTML = "date";
                document.getElementById("col2").innerHTML += brray[i];
            }
            if (column2 == 1)
            {
                document.getElementById("sort 2").innerHTML = '';
                document.getElementById("col2").innerHTML = '';
            }
            if (column3 == 0)
            {
                document.getElementById('sort 3').innerHTML = "gdp";
                document.getElementById("col3").innerHTML += crray[i];
            }
            if (column3 == 1)
            {
                document.getElementById("sort 3").innerHTML = '';
                document.getElementById("col3").innerHTML = '';
            }
            if (column4 == 0)
            {
                document.getElementById('sort 4').innerHTML = "population";
                document.getElementById("col4").innerHTML += drray[i];
            }
            if (column4 == 1)
            {
                document.getElementById("sort 4").innerHTML = '';
                document.getElementById("col4").innerHTML = '';
            }
            if (column5 == 0)
            {
                document.getElementById('sort 5').innerHTML = "gdpPerCapita";
                document.getElementById("col5").innerHTML += erray[i];
            }
            if (column5 == 1)
            {
                document.getElementById("sort 5").innerHTML = '';
                document.getElementById("col5").innerHTML = '';
            }
        }
        var page;
        page = start / sizee;
        document.getElementById("page").innerHTML = "Σελίδα " + page; 
    }
    document.getElementById('previous').addEventListener('click', function ()
    {
        start = start - sizee;
        if (start <= 0)
            start = 0;
        finish = start + sizee;
        appear(start, finish);
    });
    document.getElementById('next').addEventListener('click', function ()
    {
        start = start + sizee;
        finish = finish + sizee;
        if (finish > a_row)
        {
            finish = a_row;
            if (start > a_row)
                start = start - sizee;
        }
        appear(start, finish);
    });
    document.getElementById('sort 1').addEventListener('click', function () 
    {
        var temp1, temp2, temp3, temp4, temp5;
        if (index % 2 == 0)
        {
            for(var i = 0; i < array.length; i++)
            {
                for (var j = i+1; j < array.length; j++)
                {
                    if (array[j] < array[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                }
            }
        }
        if (index % 2 == 1)
        {
            for(var i = 0; i < array.length; i++)
            {
                for (var j = i+1; j < array.length; j++)
                {
                    if (array[j] > array[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                }
            }
        }
        start = 0;
        finish = sizee;
        appear(start, finish);
        index = index + 1;
    },false);
    document.getElementById('sort 2').addEventListener('click', function () 
    {
        var temp1, temp2, temp3, temp4, temp5;
        if (index % 2 == 0)
        {
            for(var i = 0; i < brray.length; i++)
            {
                for (var j = i+1; j < brray.length; j++)
                {
                    if (brray[j] < brray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                }
            }
        }
        if (index % 2 == 1)
        {
            for(var i = 0; i < brray.length; i++)
            {
                for (var j = i+1; j < brray.length; j++)
                {
                    if (brray[j] > brray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                }
            }
        }
        start = 0;
        finish = sizee;
        appear(start, finish);
        index = index + 1;
    },false);
    document.getElementById('sort 3').addEventListener('click', function () 
    {
        var temp1, temp2, temp3, temp4, temp5;
        if (index % 2 == 0)
        {
            for(var i = 0; i < crray.length; i++)
            {
                for (var j = i+1; j < crray.length; j++)
                {
                    crray[j] = parseFloat(crray[j]);
                    crray[i] = parseFloat(crray[i]);
                    if (crray[j] < crray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                    crray[j] = crray[j] + '<br/>';
                    crray[i] = crray[i] + '<br/>';
                }
            }
        }
        if (index % 2 == 1)
        {
            for(var i = 0; i < crray.length; i++)
            {
                for (var j = i+1; j < crray.length; j++)
                {   
                    crray[j] = parseFloat(crray[j]);
                    crray[i] = parseFloat(crray[i]);
                    if (crray[j] > crray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                    crray[j] = crray[j] + '<br/>';
                    crray[i] = crray[i] + '<br/>';
                }
            }
        }
        start = 0;
        finish = sizee;
        appear(start, finish);
        index = index + 1;
    },false);
    document.getElementById('sort 4').addEventListener('click', function () 
    {
        var temp1, temp2, temp3, temp4, temp5;
        if (index % 2 == 0)
        {
            for(var i = 0; i < drray.length; i++)
            {
                for (var j = i+1; j < drray.length; j++)
                {
                    drray[j] = parseInt(drray[j]);
                    drray[i] = parseInt(drray[i]);
                    if (drray[j] < drray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                    drray[j] = drray[j] + '<br/>';
                    drray[i] = drray[i] + '<br/>';
                }
            }
        }
        if (index % 2 == 1)
        {
            for(var i = 0; i < drray.length; i++)
            {
                for (var j = i+1; j < drray.length; j++)
                {   
                    drray[j] = parseInt(drray[j]);
                    drray[i] = parseInt(drray[i]);
                    if (drray[j] > drray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                    drray[j] = drray[j] + '<br/>';
                    drray[i] = drray[i] + '<br/>';
                }
            }
        }
        start = 0;
        finish = sizee;
        appear(start, finish);
        index = index + 1;
    },false);
    document.getElementById('sort 5').addEventListener('click', function () 
    {
        var temp1, temp2, temp3, temp4, temp5;
        if (index % 2 == 0)
        {
            for(var i = 0; i < erray.length; i++)
            {
                for (var j = i+1; j < erray.length; j++)
                {
                    erray[j] = parseFloat(erray[j]);
                    erray[i] = parseFloat(erray[i]);
                    if (erray[j] < erray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                    erray[j] = erray[j] + '<br/>';
                    erray[i] = erray[i] + '<br/>';
                }
            }
        }
        if (index % 2 == 1)
        {
            for(var i = 0; i < erray.length; i++)
            {
                for (var j = i+1; j < erray.length; j++)
                {
                    erray[j] = parseFloat(erray[j]);
                    erray[i] = parseFloat(erray[i]);
                    if (erray[j] > erray[i])
                    {
                        sort(array, brray, crray, drray, erray, i, j);
                    }
                    erray[j] = erray[j] + '<br/>';
                    erray[i] = erray[i] + '<br/>';
                }
            }
        }
        start = 0;
        finish = sizee;
        appear(start, finish);
        index = index + 1;
    },false);
    document.getElementById('row1').addEventListener('click', function () 
    {
        if (column1 == 0)
        {
            column1 = 1;
            document.getElementById('row1').innerHTML = "Εμφάνιση 1ης στήλης"; 
        }
        else
        {
            column1 = 0;
            document.getElementById('row1').innerHTML = "Απόκρυψη 1ης στήλης"; 
        }
        appear(start, finish);
    },false);
    document.getElementById('row2').addEventListener('click', function () 
    {
        if (column2 == 0)
        {
            column2 = 1;
            document.getElementById('row2').innerHTML = "Εμφάνιση 2ης στήλης"; 
        }
        else
        {
            column2 = 0;
            document.getElementById('row2').innerHTML = "Απόκρυψη 2ης στήλης"; 
        }        
        appear(start, finish);
    },false);
    document.getElementById('row3').addEventListener('click', function () 
    {
        if (column3 == 0)
        {
            column3 = 1;
            document.getElementById('row3').innerHTML = "Εμφάνιση 3ης στήλης"; 
        }
        else
        {
            column3 = 0;
            document.getElementById('row3').innerHTML = "Απόκρυψη 3ης στήλης"; 
        }
        appear(start, finish);
    },false);
    document.getElementById('row4').addEventListener('click', function () 
    {
        if (column4 == 0)
        {
            column4 = 1;
            document.getElementById('row4').innerHTML = "Εμφάνιση 4ης στήλης"; 
        }
        else
        {
            column4 = 0;
            document.getElementById('row4').innerHTML = "Απόκρυψη 4ης στήλης"; 
        }
        appear(start, finish);
    },false);
    document.getElementById('row5').addEventListener('click', function () 
    {
        if (column5 == 0)
        {
            column5 = 1;
            document.getElementById('row5').innerHTML = "Εμφάνιση 5ης στήλης"; 
        }
        else
        {
            column5 = 0;
            document.getElementById('row5').innerHTML = "Απόκρυψη 5ης στήλης"; 
        }
        appear(start, finish);
    },false);
}
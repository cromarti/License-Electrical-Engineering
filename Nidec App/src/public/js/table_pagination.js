$(document).ready(function(){
        var table = $('#menu').DataTable( {
                                 dom: "<'row'<'col-sm-4'l><'col-sm-5 text-center'B><'col-sm-3'f>>" +
                                      "<'row'<'col-sm-12'tr>>" +
                                      "<'row'<'col-sm-5'i><'col-sm-7'p>>" 
                                        ,
                                 buttons: [
                                     'copy', 'excel', 'pdf', 'print'
                                 ]
                             } );

        $.fn.dataTable.ext.search.push(
        function (settings, data, dataIndex) {
            var min = $('#min').datepicker("getDate");
            var max = $('#max').datepicker("getDate");
            var evalDate = moment(data[0] , 'DD/MM/YYYY').format('MM/DD/YYYY');
            var evalDate = new Date(evalDate);
            if (min == null && max == null) { return true; }
            if (min == null && evalDate <= max) { return true;}
            if(max == null && evalDate >= min) {return true;}
            if (evalDate <= max && evalDate >= min) { return true; }
            return false;
        }
        );

       
            $("#min").datepicker({ onSelect: function () { table.draw(); },dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true });
            $("#max").datepicker({ onSelect: function () { table.draw(); },dateFormat: 'dd/mm/yy', changeMonth: true, changeYear: true });
            

            // Event listener to the two range filtering inputs to redraw on input
            $('#min, #max').change(function () {
                table.draw();
            });
});


 var emptyRow = "<tr><td colspan='4' class='text-center'> No Records Available</td></tr>";
        var emptyNewRow = "<tr class='trNewRow'>"; 
        emptyNewRow = emptyNewRow + "    <td class='tdName'>";
        emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtName' placeholder='Enter Name'/>";
        emptyNewRow = emptyNewRow + "    </td>";
        emptyNewRow = emptyNewRow + "    <td class='tdCity'>";
        emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtCity' placeholder='Enter Email'/>";
        emptyNewRow = emptyNewRow + "    </td>";
        emptyNewRow = emptyNewRow + "    <td class='tdMobile'>";
        emptyNewRow = emptyNewRow + "        <input type='text' class='form-control txtMobile' placeholder='Enter Date of Seminar'/>";
        emptyNewRow = emptyNewRow + "    </td>";
        emptyNewRow = emptyNewRow + "    <td class='tdAction'>";
        emptyNewRow = emptyNewRow + "        <button class='btn btn-sm btn-success btn-save'> Save</button>";
        emptyNewRow = emptyNewRow + "        <button class='btn btn-sm btn-success btn-cancel'> Cancel</button>";
        emptyNewRow = emptyNewRow + "    </td>";
        emptyNewRow = emptyNewRow + "</tr>";

        var rowButtons ="<button class='btn btn-success btn-sm btn-edit' > Edit </button>  <button class='btn btn-danger btn-sm' > Delete </button> ";
        var rowUpdateButtons ="<button class='btn btn-success btn-sm btn-save' > Update </button>  <button class='btn btn-danger btn-sm btn-save' > Cancel </button> ";

        $(document).ready(function () {
            
            $("#tblData tbody").append(emptyRow); // adding empty row on page load 
            
            $("#btnAdd").click(function () { 
                
                if ($("#tblData tbody").children().children().length == 1) {
                    $("#tblData tbody").html("");
                }
            
                $("#tblData tbody").append(emptyNewRow); // appending dynamic string to table tbody
            });
            
            $('#tblData').on('click', '.btn-save', function () {
                const name =  $(this).parent().parent().find(".txtName").val();
                $(this).parent().parent().find(".tdName").html(""+name+""); 
                const city =  $(this).parent().parent().find(".txtCity").val();
                $(this).parent().parent().find(".tdCity").html(""+city+"");
                const mobile =  $(this).parent().parent().find(".txtMobile").val();
                $(this).parent().parent().find(".tdMobile").html(""+mobile+"");
                $(this).parent().parent().find(".tdAction").html(rowButtons);
            });
             
            
            $('#tblData').on('click', '.btn-danger', function () { // registering function for delete button  
                $(this).parent().parent().remove();
                if ($("#tblData tbody").children().children().length == 0) {
                    $("#tblData tbody").append(emptyRow);
                }
            });
            

            $('#tblData').on('click', '.btn-cancel', function () { 
                $(this).parent().parent().remove();
            });
            $('#tblData').on('click', '.btn-edit', function () { 
                const name =$(this).parent().parent().find(".tdName").html();

                $(this).parent().parent().find(".tdName").html("<input type='text' value='"+name+"' class='form-control txtName' placeholder='Enter Name'/>"); 


                const city =$(this).parent().parent().find(".tdCity").html();

                $(this).parent().parent().find(".tdCity").html("<input type='text' value='"+city+"' class='form-control txtCity' placeholder='Enter City'/>"); 


                const mobile =$(this).parent().parent().find(".tdMobile").html();

                $(this).parent().parent().find(".tdMobile").html("<input type='text' value='"+mobile+"' class='form-control txtMobile' placeholder='Enter Mobile'/>"); 
                $(this).parent().parent().find(".tdAction").html(rowUpdateButtons);
                
                
            });
        });

        
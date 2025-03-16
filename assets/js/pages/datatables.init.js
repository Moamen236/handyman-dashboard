// $(document).ready(function () {
//     $("#datatable").DataTable(),
//         $("#datatable-buttons")
//             .DataTable({ buttons: ["copy", "excel", "pdf"], dom: 'Plfrtip',lengthChange: !1 })
//             .buttons()
//             .container()
//             .appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)"),
//         $(".dataTables_length select").addClass("form-select form-select-sm");
// });


$(document).ready(function () {
    $("#datatable").DataTable({
        language: {
            url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/ar.json"
        }
    });

    $("#datatable-buttons")
        .DataTable({
            buttons: ["copy", "excel", "pdf"],
            dom: 'Plfrtip',
            lengthChange: false,
            language: {
                url: "https://cdn.datatables.net/plug-ins/1.13.6/i18n/ar.json"
            }
        })
        .buttons()
        .container()
        .appendTo("#datatable-buttons_wrapper .col-md-6:eq(0)");

    $(".dataTables_length select").addClass("form-select form-select-sm");
});

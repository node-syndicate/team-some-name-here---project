$(() => {
    let fullDate;
    $('#datepicker').datepicker({
        dateFormat: 'yy-mm-dd',
        onSelect: () => {
<<<<<<< HEAD
            let date = $('#datepicker').datepicker('getDate').getDate();
            let month = $('#datepicker').datepicker('getDate').getMonth() + 1;
            const year = $('#datepicker').datepicker('getDate').getFullYear();
            date < 10? date = '0' + date: date;
            month < 10? month = '0' + month: month;
            fullDate = `${year}-${month}-${date}`;
            const category = $('.category-title h1').text();
            const url = `/news?categories=${category}&filter=${fullDate}`;
            console.log(url);
            $.get(url, (result) => {
                $('.sub-news > .row').append(result);
            });
=======
            const date = $('#datepicker').datepicker('getDate').getDate();
            const month = $('#datepicker').datepicker('getDate').getMonth() + 1;
            const year = $('#datepicker').datepicker('getDate').getFullYear();
            fullDate = [date, month, year];
            // console.log('date', fullDate);
>>>>>>> 8da4cdab81d0ec4ac7fd6324b227f4e679809035
        },
    });
});

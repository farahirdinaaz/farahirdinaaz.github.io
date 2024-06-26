//Farah Irdina Binti Ahmad Zulkiflee, 2215184
document.addEventListener('DOMContentLoaded', () => {
    //get the modal element
    const modal = document.getElementById('modal');
    //get the close button
    const span = document.querySelector('.close'); 
    //get the school logos
    const schoolLogos = document.querySelectorAll('.school-logo');
    //loop through each school logo
    schoolLogos.forEach(logo => {
        //event listener
        logo.onclick = function() {
            //get the 'data-school'attribute value
            const schoolId = this.getAttribute('data-school');
            //initiliase the variables
            let schoolName = '';
            let schoolAddress = '';
            let schoolImage = '';
            let mapLink = '';
            //switch case for each 'data-school'attribute value
            switch(schoolId) {
                case '1':
                    schoolName = 'SK Taman Bukit Indah (SKTBI)';
                    schoolAddress = 'Sekolah Kebangsaan Taman Bukit Indah, Jalan Bukit Indah Utama, Taman Bukit Indah, 68000 Ampang, Selangor';
                    schoolImage = 'sktbi.jpg'; 
                    mapLink = 'https://www.google.com/maps?q=Sekolah+Kebangsaan+Taman+Bukit+Indah+68000+Ampang+Selangor';
                    break;
                case '2':
                    schoolName = 'SMK Bukit Indah (SEMINDA)';
                    schoolAddress = 'Sekolah Menengah Kebangsaan Bukit Indah, Jalan Bukit Indah Utama, Taman Bukit Indah, 68000 Ampang, Selangor';
                    schoolImage = 'seminda.jpg'; 
                    mapLink = 'https://www.google.com/maps?q=Sekolah+Menengah+Kebangsaan+Bukit+Indah+68000+Ampang+Selangor';
                    break;
                case '3':
                    schoolName = 'Centre for Foundation Studies, International Islamic University Malaysia (CFS IIUM Gambang)';
                    schoolAddress = 'Centre for Foundation Studies, International Islamic University Malaysia, Paya Besar, 26300 Gambang, Pahang';
                    schoolImage = 'cfs.jpg'; 
                    mapLink = 'https://www.google.com/maps?q=International+Islamic+University+Malaysia+Paya+Besar+26300+Gambang+Pahang';
                    break;
                case '4':
                    schoolName = 'International Islamic University Malaysia (IIUM Gombak)';
                    schoolAddress = 'International Islamic University Malaysia, Jalan Gombak, 53100 Kuala Lumpur, Selangor';
                    schoolImage = 'iiumGombak.jpg'; 
                    mapLink = 'https://www.google.com/maps?q=International+Islamic+University+Malaysia+Jalan+Gombak+53100+Kuala+Lumpur+Selangor';
                    break;
            }
            //set modal content for the selected school
            document.getElementById('modal-title').textContent = schoolName;
            document.getElementById('modal-address').textContent = schoolAddress;
            document.getElementById('modal-image').src = schoolImage;
            document.getElementById('modal-map-link').href = mapLink;
            //display the modal
            modal.style.display = 'block';
        };
    });
    //close button
    span.onclick = function() {
        modal.style.display = 'none'; 
    };
});


    document.addEventListener('DOMContentLoaded', function() {

        const form = document.getElementById('FormContainer');
        const centerNumber = document.getElementById('centerNumber');
        const phoneNumber = document.getElementById('phoneNumber');
        const cityRegion = document.getElementById('cityRegion');
        const ownership = document.getElementById('ownership');
        const accreditation = document.getElementById('accreditation');
        const numberPhysicians = document.getElementById('numberPhysicians');
        const centerName = document.getElementById('centerName');
        const address1 = document.getElementById('address1');
        const state = document.getElementById('state');
        const timezone = document.getElementById('timezone');
        const management = document.getElementById('management');
        const ascSize = document.getElementById('ascSize');
        const timeOutPeriod = document.getElementById('timeOutPeriod');
        const nickName = document.getElementById('nickName');
        const address2 = document.getElementById('address2');
        const zip = document.getElementById('zip');
        const centerSpecialty = document.getElementById('centerSpecialty');
        const type = document.getElementById('type');
        const operatingRooms = document.getElementById('operatingRooms');
        const ccn = document.getElementById('ccn');
        const healthSystemAffiliation = document.getElementById('healthSystemAffiliation');
        const ehrSystem = document.getElementById('ehrSystem');
        const rcmSystem = document.getElementById('rcmSystem');
        const loginAttempts = document.getElementById('loginAttempts');
        const isCorporate = document.getElementById('isCorporate');
        const processAlert = document.getElementById('processAlert');
        const isClient = document.getElementById('isClient');
        const isActive = document.getElementById('isActive');
        const isBiEnabled = document.getElementById('isBiEnabled');
        const surgicalCasesStart = document.getElementById('surgicalCasesStart');
        const showPicture = document.getElementById('showPicture');
        const attachment = document.getElementById('attachment');
        const surveySchedule = document.getElementById('surveySchedule');
        const surveyEmail = document.getElementById('surveyEmail');


        form.addEventListener('submit', function(event) {
            event.preventDefault();


            if (centerNumber.value.trim() === '' || phoneNumber.value.trim() === '' || cityRegion.value === '' || ownership.value === '' || accreditation.value === '' || numberPhysicians.value === '' || centerName.value.trim() === '' || address1.value.trim() === '' || state.value === '' || timezone.value === '' || management.value === '' || ascSize.value === '' || timeOutPeriod.value === '' || zip.value.trim() === '' || centerSpecialty.value === '' || type.value === '' || operatingRooms.value === '' || ccn.value.trim() === '' || healthSystemAffiliation.value.trim() === '' || ehrSystem.value.trim() === '' || rcmSystem.value.trim() === '' || loginAttempts.value === '' || surgicalCasesStart.value === '') {
                alert('Please fill out all required fields.');
                return;
            }


            console.log('Form submitted successfully!');

        });



    });


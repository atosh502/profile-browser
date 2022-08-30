(async () => {
    // const response = await fetch('./data.json');
    // const { data: users } = await response.json();

    const users = [
        {
            "ID": "1",
            "JobTitle": "Steward",
            "FirstNameLastName": "Jane Ulyatt",
            "Company": "Team Guard SRL",
            "Email": "Jane_Ulyatt2945@vetan.org",
            "OwnedBy": "Jane Ulyatt",
            "Street": "Ensign   Alley, 889",
            "Created": "12/29/2430",
            "LastContacted": "10/30/0055"
        },
        {
            "ID": "2",
            "JobTitle": "Inspector",
            "FirstNameLastName": "Leanne Darcy",
            "Company": "DynCorp",
            "Email": "Leanne_Darcy1635@nimogy.biz",
            "OwnedBy": "Leanne Darcy",
            "Street": "Comet House  Crossroad, 3937",
            "Created": "5/25/7210",
            "LastContacted": "4/11/5107"
        },
        {
            "ID": "3",
            "JobTitle": "Assistant Buyer",
            "FirstNameLastName": "Alan Sherry",
            "Company": "Zepter",
            "Email": "Alan_Sherry6262@bretoux.com",
            "OwnedBy": "Alan Sherry",
            "Street": "Hammersmith  Road, 5123",
            "Created": "12/24/8460",
            "LastContacted": "5/13/5019"
        },
        {
            "ID": "4",
            "JobTitle": "Software Engineer",
            "FirstNameLastName": "Brad Bayliss",
            "Company": "Team Guard SRL",
            "Email": "Brad_Bayliss6188@irrepsy.com",
            "OwnedBy": "Brad Bayliss",
            "Street": "Fieldstone Street, 7192",
            "Created": "5/25/8269",
            "LastContacted": "2/21/3182"
        },
        {
            "ID": "5",
            "JobTitle": "Assistant Buyer",
            "FirstNameLastName": "Harmony Allwood",
            "Company": "It Smart Group",
            "Email": "Harmony_Allwood2401@sveldo.biz",
            "OwnedBy": "Harmony Allwood",
            "Street": "Garfield Pass, 3753",
            "Created": "6/26/3680",
            "LastContacted": "8/14/0621"
        },
        {
            "ID": "6",
            "JobTitle": "Cash Manager",
            "FirstNameLastName": "Amelia Gosling",
            "Company": "It Smart Group",
            "Email": "Amelia_Gosling4773@elnee.tech",
            "OwnedBy": "Amelia Gosling",
            "Street": "Bekesbourne   Pass, 4334",
            "Created": "8/11/1870",
            "LastContacted": "12/23/3310"
        },
        {
            "ID": "7",
            "JobTitle": "Fabricator",
            "FirstNameLastName": "Joy Upton",
            "Company": "Demaco",
            "Email": "Joy_Upton190@bulaffy.com",
            "OwnedBy": "Joy Upton",
            "Street": "Sheringham   Crossroad, 8160",
            "Created": "4/20/8610",
            "LastContacted": "11/26/2348"
        },
        {
            "ID": "8",
            "JobTitle": "Laboratory Technician",
            "FirstNameLastName": "Kaylee Lucas",
            "Company": "Comcast",
            "Email": "Kaylee_Lucas5544@corti.com",
            "OwnedBy": "Kaylee Lucas",
            "Street": "Erindale Drive, 7547",
            "Created": "2/18/2442",
            "LastContacted": "8/15/3354"
        },
        {
            "ID": "9",
            "JobTitle": "Budget Analyst",
            "FirstNameLastName": "Chanelle Mccormick",
            "Company": "Zepter",
            "Email": "Chanelle_Mccormick675@vetan.org",
            "OwnedBy": "Chanelle Mccormick",
            "Street": "Carolina  Pass, 8610",
            "Created": "4/17/8723",
            "LastContacted": "9/17/3220"
        },
        {
            "ID": "10",
            "JobTitle": "Mobile Developer",
            "FirstNameLastName": "Lily Horton",
            "Company": "Leadertech Consulting",
            "Email": "Lily_Horton9164@yahoo.com",
            "OwnedBy": "Lily Horton",
            "Street": "Camley   Crossroad, 3683",
            "Created": "4/30/7737",
            "LastContacted": "7/21/7624"
        },
        {
            "ID": "11",
            "JobTitle": "Accountant",
            "FirstNameLastName": "Lorraine Rixon",
            "Company": "It Smart Group",
            "Email": "Lorraine_Rixon7610@hourpy.biz",
            "OwnedBy": "Lorraine Rixon",
            "Street": "Clere  Walk, 1810",
            "Created": "11/24/0300",
            "LastContacted": "11/13/4136"
        },
        {
            "ID": "12",
            "JobTitle": "Restaurant Manager",
            "FirstNameLastName": "Matt Fowler",
            "Company": "UPC",
            "Email": "Matt_Fowler5644@gembat.biz",
            "OwnedBy": "Matt Fowler",
            "Street": "Virginia Crossroad, 5841",
            "Created": "3/18/3002",
            "LastContacted": "1/5/9262"
        },
        {
            "ID": "13",
            "JobTitle": "Operator",
            "FirstNameLastName": "Mina Walsh",
            "Company": "It Smart Group",
            "Email": "Mina_Walsh9239@sveldo.biz",
            "OwnedBy": "Mina Walsh",
            "Street": "South Vale, 695",
            "Created": "7/15/2011",
            "LastContacted": "2/8/4699"
        },
        {
            "ID": "14",
            "JobTitle": "Investment  Advisor",
            "FirstNameLastName": "Kimberly Walton",
            "Company": "21st Century Fox",
            "Email": "Kimberly_Walton9078@bulaffy.com",
            "OwnedBy": "Kimberly Walton",
            "Street": "Capeners  Boulevard, 2850",
            "Created": "1/29/1429",
            "LastContacted": "5/24/8711"
        },
        {
            "ID": "15",
            "JobTitle": "Global Logistics Supervisor",
            "FirstNameLastName": "Zoe Drake",
            "Company": "Telekom",
            "Email": "Zoe_Drake6120@kideod.biz",
            "OwnedBy": "Zoe Drake",
            "Street": "Coal Wharf  Road, 5140",
            "Created": "4/14/8544",
            "LastContacted": "8/8/0160"
        },
        {
            "ID": "16",
            "JobTitle": "Associate Professor",
            "FirstNameLastName": "Naomi Ebbs",
            "Company": "Carrefour",
            "Email": "Naomi_Ebbs8948@vetan.org",
            "OwnedBy": "Naomi Ebbs",
            "Street": "Edwin   Pass, 873",
            "Created": "6/5/2147",
            "LastContacted": "10/18/9191"
        },
        {
            "ID": "17",
            "JobTitle": "HR Coordinator",
            "FirstNameLastName": "Logan Reynolds",
            "Company": "Comcast",
            "Email": "Logan_Reynolds1064@qater.org",
            "OwnedBy": "Logan Reynolds",
            "Street": "Argyle  Route, 7242",
            "Created": "1/25/2388",
            "LastContacted": "12/1/4903"
        },
        {
            "ID": "18",
            "JobTitle": "Associate Professor",
            "FirstNameLastName": "Phillip Owens",
            "Company": "UPC",
            "Email": "Phillip_Owens8347@guentu.biz",
            "OwnedBy": "Phillip Owens",
            "Street": "Cheltenham  Lane, 6891",
            "Created": "10/16/0522",
            "LastContacted": "12/24/4014"
        },
        {
            "ID": "19",
            "JobTitle": "Service Supervisor",
            "FirstNameLastName": "Judith Edwards",
            "Company": "Biolife Grup",
            "Email": "Judith_Edwards6870@cispeto.com",
            "OwnedBy": "Judith Edwards",
            "Street": "Durweston   Way, 9345",
            "Created": "11/29/0709",
            "LastContacted": "1/6/9597"
        },
        {
            "ID": "20",
            "JobTitle": "Retail Trainee",
            "FirstNameLastName": "Domenic Osman",
            "Company": "Apple Inc.",
            "Email": "Domenic_Osman368@nanoff.biz",
            "OwnedBy": "Domenic Osman",
            "Street": "Garfield Boulevard, 8232",
            "Created": "11/30/0464",
            "LastContacted": "2/19/0857"
        }
    ]

    const tableData = document.getElementById('table-data');

    const closeRightSidebar = document.getElementById('close-right-sidebar');
    closeRightSidebar.addEventListener('click', () => {
        const profileInfo = document.getElementById("profile-info-side");
        profileInfo.style.width = 0;
    });

    const getInitials = (name) => {
        const names = name.split(' ');
        return `${names[0].substring(0, 1)}${names[names.length - 1].substring(0, 1)}`
    }

    users.forEach((user) => {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.id = "select-all";
        checkbox.name = "select-all";
        checkbox.classList.add("checkbox");
        checkbox.classList.add("hide");

        const icon = document.createElement('i');
        icon.classList.add("icon-special-class")
        icon.classList.add('fa-solid');
        icon.classList.add('fa-star');
        icon.classList.add('hide');

        const initials = document.createElement('div');
        initials.innerHTML = getInitials(user.FirstNameLastName)
        initials.classList.add('initials');

        const checkboxStarInitial = document.createElement('div');
        checkboxStarInitial.classList.add('checkbox-star-initial');
        checkboxStarInitial.appendChild(checkbox);
        checkboxStarInitial.appendChild(icon);
        checkboxStarInitial.appendChild(initials);

        // first column
        const tableFirstColumn = document.createElement('div');
        tableFirstColumn.classList.add('table-first-col');
        tableFirstColumn.appendChild(checkboxStarInitial);

        // name column
        const firstName = document.createElement('div');
        firstName.classList.add('first-name');
        firstName.setAttribute('data-id', user.ID);
        firstName.innerText = user.FirstNameLastName;

        // company column
        const company = document.createElement('div');
        company.classList.add('company');
        company.classList.add('font-blue');
        company.innerText = user.Company;

        // company column
        const title = document.createElement('div');
        title.classList.add('title');
        title.innerText = user.JobTitle;

        // company column
        const email = document.createElement('div');
        email.classList.add('email');
        email.classList.add('font-blue');
        email.innerText = user.Email;

        // owned by column
        const ownedBy = document.createElement('div');
        ownedBy.classList.add('owned-by');
        ownedBy.classList.add('font-blue');
        ownedBy.innerText = user.OwnedBy;

        // street column
        const street = document.createElement('div');
        street.classList.add('street');
        street.innerText = user.Street;

        // created column
        const created = document.createElement('div');
        created.classList.add('created');
        created.innerText = user.Created;

        // last contacted column
        const lastContacted = document.createElement('div');
        lastContacted.classList.add('last-contacted');
        lastContacted.innerText = user.LastContacted;

        const tableRow = document.createElement('div');
        tableRow.classList.add('table-row');
        tableRow.appendChild(tableFirstColumn);
        tableRow.appendChild(firstName);
        tableRow.appendChild(company);
        tableRow.appendChild(title);
        tableRow.appendChild(email);
        tableRow.appendChild(ownedBy);
        tableRow.appendChild(street);
        tableRow.appendChild(created);
        tableRow.appendChild(lastContacted);

        tableData.appendChild(tableRow);

        firstName.addEventListener('click', (event) => {
            const firstNames = document.querySelectorAll('.first-name');
            firstNames.forEach((name) => {
                name.classList.remove('underline');
            })
            firstName.classList.add("underline")

            const tableRows = document.querySelectorAll('.table-row');
            tableRows.forEach((row) => {
                row.classList.remove('selected-row');
            })
            tableRow.classList.add("selected-row")

            const checkboxes = document.querySelectorAll(`.table-row .checkbox`);
            checkboxes.forEach((checkbox) => {
                checkbox.classList.add("hide");
            })
            checkbox.classList.remove("hide");

            const starIcons = document.querySelectorAll(`.icon-special-class`);
            starIcons.forEach((starIcon) => {
                // TODO: this doesn't work in svg components
                starIcon.classList.add("hide");
            })
            icon.classList.remove("hide");

            const profileInfo = document.getElementById("profile-info-side");
            profileInfo.style.width = "22%";

            // update data in the right side panel
            const id = event.target.getAttribute("data-id");
            const selectedUser = users.find(user => user.ID === id);

            const profileDetailInitials = document.getElementById('profile-detail-initials');
            profileDetailInitials.innerHTML = getInitials(selectedUser.FirstNameLastName);

            const profileDetailFirstName = document.getElementById('profile-detail-first-name');
            const detailItemName = document.getElementById('detail-item-name');
            detailItemName.innerHTML = selectedUser.FirstNameLastName;
            profileDetailFirstName.innerHTML = selectedUser.FirstNameLastName;

            const profileDetailCompany = document.getElementById('profile-detail-company');
            const detailTimeCompany = document.getElementById('detail-time-company');
            detailTimeCompany.innerHTML = selectedUser.Company;
            profileDetailCompany.innerHTML = selectedUser.Company;

            const profileDetailTitle = document.getElementById('detail-item-title');
            profileDetailTitle.innerHTML = selectedUser.JobTitle;

            const profileDetailEmail = document.getElementById('detail-item-email');
            profileDetailEmail.innerHTML = selectedUser.Email;

            const profileDetailOwner = document.getElementById('detail-item-owner');
            profileDetailOwner.innerHTML = selectedUser.OwnedBy;
        })
    })
})()

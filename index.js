(async () => {
    const response = await fetch('./data.json');
    const { data: users } = await response.json();

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

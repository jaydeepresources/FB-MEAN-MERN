var activities = []

function addActivity() {
    var newActivity = document.getElementById("activityInput").value
    activities.push(newActivity)
    document.getElementById("activityInput").value = ""
    mapActivitiesToList()
}

function mapActivitiesToList() {
    var listStr = ""
    for (let i = 0; i < activities.length; i++) {
        listStr += `
        <li class='list-group-item d-flex justify-content-between align-items-center'>
            <span class="lead">${activities[i]}</span>
            <button class="btn btn-danger bi bi-x-lg" onClick="deleteActivity(${i})"></button>
        </li>
        `
    }
    document.getElementById("activityUL").innerHTML = listStr

}

function deleteActivity(index) {
    activities.splice(index, 1)
    mapActivitiesToList()
}
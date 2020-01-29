export const fetchTeams = () => {
    return $.ajax({
        method: "GET",
        url: "api/teams",
        // error: (err) => console.log(err)
    });
}

export const fetchTeam = id => {
    return $.ajax({
        method: "GET",
        url: `api/teams/${id}`,
    });
}

export const createTeam = (team) => {
    return $.ajax({
        method: "POST",
        url: "api/teams",
        data: { team }
    });
}


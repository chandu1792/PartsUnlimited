function getRecommendations(recommendationId) {
    $.ajax({
        url: "/Recommendations/GetRecommendations",
        type: "GET",
        data: { recommendationId: recommendationId },
        success: function (data) {
            $("#recommendations-panel").html(data);
        },
        error: function () {
            echo alert("Failed to get recommendations...");
        },
    })
}

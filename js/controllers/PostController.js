app.controller('PostController', ['$scope', function($scope) {
  $scope.posts = [
    {
      author: {
        name: 'Calvin Broadus, Jr.',
        avatar: 'http://www.trinitywebs.com/misc/avatars/psiphere-avatar-64px.jpg'
      },
      comment: {
        img: 'http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg',
        text: 'How much for that dogg in the window?'
      }
    },


    {
      author: {
        name: 'Matthew Healy',
        avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBxAQCgkLDRYPDQwMFxsgFRsWIB0iIiAdHx8kKCgsJCYxJx8fLTEtLDUrLi46IyE/ODMsNygtLisBCgoKDQwNFg8PGi0lHyU3LTc3NystNS03LTctNystKy0rKystNysrKystKysrKysrKysrKy0rKysrKysrKysrK//AABEIAEAAQAMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgMEBwIIAf/EADIQAAEDAwIFAwEGBwAAAAAAAAECAxEABAUhMQYSQVFhE3GBkQcUFTKhsSIkQnKC0eH/xAAYAQEBAAMAAAAAAAAAAAAAAAACAQADBP/EAB8RAQADAAIBBQAAAAAAAAAAAAEAAhESIQMEMUFRYf/aAAwDAQACEQMRAD8AypAK1ErMkqkk1ebYISDOhHQ9J/5VW2AJAOgjSrjZHNoCTsAO/Skwk6t7B27fSxbJLji4CUpmZNNdr9l2cumgVejbA9HlGY7wAfoYrR+CuG2cHYIKwFXawC6vzGoHgTHmPaGRB52krGxAI+aOy5MOvvsw4gskqcb9G7QOjKjzx7KAH60qP267d0t3CS04hRSsK3B7Ebg16Tvn029s68rZtJUY7ASaSOOcBbZW2evGxF63/CY/qjp8yI7GPMxshrKG9TFnQAoxXIUUkKToRqCN5qa5Z9NZSNYOiv2NR8sp13NbB02BEcnTZgUd4RZTd8S45tz8nrBZH9oKo+YAoCwQSe5o9we56HElm4JPIpRA8wYqMpPQank21qt5yQhMqUR27mviXgxjkqMhLbUx1gCsazz/AB5i37jJW75vLJ5KioNQptKSNQUGYAFHuE+N8hxHjbq1yDTVmltrk+9HngkiDAAMkDWJFB6IyquB3HbiVbn4Je+mCr+XWITuSQYA+tC7VTl9gPv/ACKQt2HUtriYgAmB00kHfWlP7QuOcljgnHY1Da23Wo+8jnJ7QAQIMa9aSsU5xRdO27633GENBAbCzpA2HL296xC1GUEsdStl2Q3euJGkKIg+CQB9AKoERqdpovnXPVyLqlDlUSSR5kz+tCXSIjzWeN6k8hiyBkzBOwOtF8A4hnM2TpPIlNw2STtHMJn4oO20TAnrV+1tnSQSJEyIiY9qbATZ7fhBRbdVj7h+11UksLII6gawDBBHfeq2XKsBzpvgktuGEOGAk+O0+PFQcHZW5yWNLLbi0X9mmEkEStvpIOhI1Go/er97lMk7aEOGyu0AwUuykz2I1EiufyJYy3U7/Tt6PKuP5Ep91/iG/Q3jZSpsnlUkmJOkk9omu0cLZTGNt3V46Xl8yUhhsjmPeDB2AJnxRLK5W9tpfbXZ2RSmALcFSz4AMDfxvQPK31yyy0t9bjl6+kwpwiUtnTQDQE6jYfpTq1K8azX5+bflfqAc2lP4hchtXOhDhQlXcAwCfeJ+aDOEhZA26GiKgQVc/kVSUAASrXtToYYTluq6yVtuVgJ0AJid/aaKWiS20QNVwdPjb5qsfSaUColayZUD366VKzfKNy0UAEBaQB037daeb7wb9RuzONu+GPw6/wAeYfbbh9QEj1CSSCOoIIHxOhii1rxpwzkEJdzDJRetpIDTn8SP8TsZ8iRUq8mzd2xDkKBEKB2pGzuOtUOk28kLMls9BEyDR4u7NhYTPmE+K+KcE29z4duHZhbbf5SPPQfGtKzOUduwtV5BW8uVLA/KDoAB2Hb/AHUZsGW2uZQlXYHbz5qwxj1PLQhqSVaq9qzORJyxk7raEtAfmMQoD6zQy5ER10iKmNwtpCQdFHWCDt037ioXXvUKZBUsmIG/YAUQSJRn/9k='
      },
      comment: {
        text: 'I used to have a recurring dream when I was younger.'
      }
    }
  ]  
}]);
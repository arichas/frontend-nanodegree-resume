var bio = {
	"name": "Ari Chasnoff",
	"role": "Front-end Web Development",
	"welcomeMessage": "Thanks for checking out my resume",
	"skills": ["CSS", " HTML", "Javascript"],
	"contacts": {
		"location": "San Francisco, CA",
		"website": "arichasnoff.com",
		"email": "arichasnoff@gmail.com",
		"github": "arichas",
		"twitter": "achasnoff"
		},
	"biopic": "images/my_picture.jpg",

	"display": function () {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$('#topContacts').append(HTMLwebsite.replace('%data%', bio.contacts.website));
		$('#topContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#topContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#topContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
		$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
		$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

		if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		}

		$('#footerContacts').append(HTMLwebsite.replace('%data%', bio.contacts.website));
		$('#footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
		$('#footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
		$('#footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));

	}
};
bio.display();
$('#navbar').append(HTMLnavBar);

var work = {
	"jobs": [
		{
		"employer": "Stanford Graduate School of Business",
		"title": "Online Technologies Producer",
		"location": "Stanford, CA",
		"dates": "October 2012-present",
		"description": "Planned and executed the digital communications strategy for the MBA Admissions Office at Stanford University."
		},
		{
		"employer": "Jewish Community Federation of San Francisco",
		"title": "Online Marketing Manager",
		"location": "San Francisco, CA",
		"dates": "July 2008-September 2012",
		"description": "Managed digital marketing operations for this 100+ year-old community foundation."
		},
		{
		"employer": "NTI Upstream",
		"title": "Web Production Associate",
		"location": "Chicago, IL",
		"dates": "June 2007-June 2008",
		"description": "Designed and hand-coded web pages using HTML and CSS for the company’s new online store."
		},
		{
		"employer": "Morningstar",
		"title": "Web Coordinator Intern",
		"location": "Chicago, IL",
		"dates": "January 2007-June 2007",
		"description": "Published web content and display advertising to the company’s website."
		}
	],

	'display': function () {
		for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedLocation);
		$(".work-entry:last").append(formattedDescription);
		}
	}
};
work.display();

var projects = {
	"projects": [
		{
			"title": "A Week in the Life of a Stanford MBA Student",
			"dates": "June 2015",
			"description": "Managed production of user-generated web content highlighting the Stanford student experience.",
			"images": "images/parakeet.jpg"
		},
		{
			"title": "Stanford MBA Online Information Session",
			"dates": "November 2015",
			"description": "Produced a 45-minute live video event featuring Q&A with two current students.",
			"images": "images/online-session.jpg"
		},
		{
			"title": "Portfolio Website",
			"dates": "October 2015",
			"description": "Built a hand-coded portofolio website featuring responsive web design techniques and the Bootstrap CSS framework.",
			"images": "images/parakeet.jpg"
		},
		{
			"title": "Website launch in Drupal CMS",
			"dates": "January 2012",
			"description": "Migrated large non-profit website to Drupal and oversaw content and technical maintenance.",
			"images": "images/parakeet.jpg"
		}
	],

	"display": function () {
		for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(formattedProjectImage);
			}
		}
};
projects.display();

var education = {
	"schools": [
		{
			"name": "Boston University",
			"location": "Boston, MA",
			"degree": "BS",
			"major": "Communications",
			"dates": "1999"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": "December 2015",
			"url": "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title": "How to Use Git and Github",
			"school": "Udacity",
			"dates": "November 2015",
			"url": "https://www.udacity.com/course/how-to-use-git-and-github--ud775"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": "October 2015",
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
			"title": "Responsive Images",
			"school": "Udacity",
			"dates": "October 2015",
			"url": "https://www.udacity.com/course/responsive-images--ud882"
		}
	],

	"display": function () {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
			var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
			var schoolDegree = formattedSchoolName + formattedSchoolDegree;
			$(".education-entry:last").append(schoolDegree);

 			var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);

 			var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);

			var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
			$(".education-entry:last").append(formattedSchoolMajor);
		}
		$('#education').append(HTMLonlineClasses);
		for (online in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);

			var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[online].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[online].school);
			var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
			$('.education-entry:last').append(formattedOnlineCourse);

			var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[online].dates);
			$(".education-entry:last").append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[online].url);
			$(".education-entry:last").append(formattedOnlineURL);
		}
	}
};
education.display();

//Make the map display
$('#mapDiv').append(googleMap);
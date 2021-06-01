let count = 0;

const db = firebase.firestore();

$('#btn-counter').click(() => {
    count++;
    $('#count-display').html(count);
	
	db.collection('counter').doc('countID').update({
		count: firebase.firestore.FieldValue.increment(1)
	});
});

db.collection("counter").doc("countID")
    .onSnapshot((doc) => {
		$('#count-display').html(doc.data().count);
});
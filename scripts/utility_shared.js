let getFlag = function(char, toggleName)
{
	return char.data.flags[toggleName] == true;
}

let toggleFlag = function(char, toggleName)
{
	let toggle = (char.data.flags[toggleName] == undefined || char.data.flags[toggleName] == false);

	let charObj = {};
	charObj['flags.'+toggleName] = toggle;
	char.update(charObj );
}

let createNewFieldValueHTML = function(toggle, fieldName, value)
{
	// We'll clean this up with css later
	let color = toggle? 'color:green;' : 'color:red;';
	return `<p><b>New ${fieldName}:</b> <span style="${color}; background-color:lightyellow; border:1px solid; border-radius: 3px; padding-left: 2px; padding-right: 2px">${value}</span></p>`;
}

let performReportedOperation = function(operationFn, listArgs)
{
	let result = operationFn(...listArgs);
	let chatData = {
        user: game.user._id,
        speaker: ChatMessage.getSpeaker(),
        flavor: result[0],
        content: result[1]
    };
	ChatMessage.create(chatData, {});
}
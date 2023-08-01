# Toast Message

## What is it?

A toast message is a common UI pattern used to deliver notifications. A toast 
message pops up, like a piece of toast popping out of a toaster.

Semantically, they're a bit like dialogs/modals, but with 2 big differences:

Dialogs should be used when immediate attention is required. They generally 
block the user from what they were doing, trapping focus within the dialog. 
Toast messages, by contrast, should be used for non-urgent status updates. They 
shouldn't interfere with what the user is doing.
Multiple toasts can be present at once. We aren't limited to one at a time.
In our implementation, toasts will stack up in the bottom corner.

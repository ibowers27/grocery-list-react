# Grocery List Manager (MiniProject 3)

###
Ivy Bowers

This website is a grocery list manager made with React, keeping the frontend (UI) simple and user-friendly. It's okay if the items only contain text-based information (image is not a must). All components should have proper styles.

## Live Link:
heartgrocerylist.netlify.app
---- 

### Major Sections in the page:
- Component-based implementation
- Grocery Item Component
- Buttons/labels/etc. so a user can add/update/delete items
- Application of `map`, `filter`, `reduce`
- `map` is used 3 times: in updateItemName for replacing an items name if edited, in updateItemCount for replacing the count if edited, and in the rendering of the grocery items into the component for display.
- `filter` is used 1 time: in deleteItem to return a new array with every item's id except the deleted item.
- `reduce` is used 1 time: in calculating the totalCount of all items in the list by adding up each of the item's count property.
---

### Functions of the grocery list:
- Add/insert new grocery items to the list
- Update/modify existing item
- Delete/remove some existing items from the list
- Display/view the current items (as an ul/li)

## mini-project-03-spring2026-react-beginner
(function(window, undefined) {
  var dictionary = {
    "dc710d9c-6f1a-49a9-96fd-887379568286": "12. Customer Signature",
    "134eb2d9-6ce8-48e2-ba81-4b3c8dc37a61": "3c. Boat Rental Checkout Invoice (Paid)",
    "e1465ea1-c135-4d8f-b4de-f8167fa5d748": "3h. Boat Rental Checkout Finish",
    "f411c928-6950-4b15-bd2a-65346bd1be2c": "3g. Boat Rental Checkout Inspection (Upload Image)",
    "943700ed-5712-4cf9-b2e5-3896bf377cdd": "2b. Boat Rental Main Expanded (Cleaning)",
    "ad660eef-5e86-437b-86ba-b5c481d66d60": "14a. Scan Wristband Screen",
    "ed9ff071-5394-440c-8356-d519c4827800": "15b. Invalid Wristband",
    "94f28b74-d339-4f48-be49-20fb57c725d0": "3f. Boat Rental Checkout Inspection",
    "ee98b141-a761-47fa-b8d2-55d09880d9d4": "15a. Valid Wristband",
    "a436b14c-ab82-4c00-9ef7-019a7a0ac102": "1a. Dashboard Alt",
    "ae6864cc-df18-433f-a3f8-234e2a44fde2": "4b. Boat Rental Checkin Inspection",
    "fb1555e4-67b0-4b6f-b655-165163af5b59": "10. Charge Card",
    "7e9978a0-dabc-43ba-a8c8-926ffa116777": "3b. Boat Rental Checkout Invoice (Not Paid)",
    "7d8db754-4892-41a3-971e-91105daa1d28": "15. Check Wristband",
    "389870b4-2db4-4878-8c3b-200f5df91f45": "3a. Boat Rental Checkout Main",
    "7b774b25-e883-4846-b178-36148d7e845e": "Login",
    "458284a3-ceab-4bd3-bdbe-0ac245470075": "3e. Boat Rental Checkout Documents (Complete)",
    "9ec15db7-a2c4-42ae-a12e-ba125748be81": "2c. Boat Rental Main Expanded (Checkin)",
    "3559264c-e03d-4468-b52a-0e96c2d99c9f": "4d. Boat Rental Checkin Finish",
    "022ae65c-5b5b-4792-ad47-709a15909141": "11. Resend Document Link",
    "88720e75-c49a-4fa6-ac74-108a641616d0": "4e. Boat Rental Checkin Report",
    "5a2c3fc0-98fd-43e6-bad1-883b4a109d9b": "13. Events Dashboard",
    "fd645477-be4b-49df-b211-6d449da50d06": "3d. Boat Rental Checkout Documents (Needs Signatures)",
    "b9c59276-e4d6-44e4-b416-c4f207e5b6a9": "14b. Scan Wristband",
    "b2538a84-1bda-43c9-9f7a-52e3a21257b0": "2a. Boat Rental Main Expanded (Checkout)",
    "faf8329f-eb4d-4595-9548-4940a789a1f9": "4c. Boat Rental Checkin Fuel",
    "bcc5ff2a-a109-4c35-a43e-b4403994f7bc": "2. Boat Rental Main",
    "6d22726e-2e53-4710-ac6f-868fc44fdb65": "14. Redeem Tickets",
    "22711683-a943-4fa5-ba00-50046baf15e4": "4a. Boat Rental Checkin Main",
    "0080c56e-e4d9-40ff-bb00-c559a34402d8": "3i. Boat Rental Checkout Report",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "1. Dashboard",
    "14897fb4-1696-4f85-9e8b-c9a446cfe64f": "14c. Take Picture",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{GUTR:function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));var i=a("IheW"),n=a("VVgf"),p=a("Fy9I"),r=a("pLZG"),s=a("lJxs"),l=a("8Y7J");let c=(()=>{class t extends n.a{constructor(t,e){super(t,e)}getAllApartmentFacilitiesResponse(){let t=this.newParams(),e=new i.g,a=new i.i("GET",this.rootUrl+"/api/Facility/getAllApartmentFacilities",null,{headers:e,params:t,responseType:"json"});return this.http.request(a).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getAllApartmentFacilities(){return this.getAllApartmentFacilitiesResponse().pipe(Object(s.a)(t=>t.body))}getApartmentFacilitiesByApartmentIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilitiesByApartmentId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilitiesByApartmentId(t){return this.getApartmentFacilitiesByApartmentIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilitiesByApartmentIdStatusResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.active&&(e=e.set("active",t.active.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilitiesByApartmentIdStatus",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilitiesByApartmentIdStatus(t){return this.getApartmentFacilitiesByApartmentIdStatusResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityByFacilityIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentFacilityId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityByFacilityId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityByFacilityId(t){return this.getApartmentFacilityByFacilityIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityByCautionDepositResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.CautionDeposit&&(e=e.set("CautionDeposit",t.CautionDeposit.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityByCautionDeposit",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityByCautionDeposit(t){return this.getApartmentFacilityByCautionDepositResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityByFacilityTypeIdResponse(t){let e=this.newParams(),a=new i.g;null!=t.facilityTypeId&&(e=e.set("facilityTypeId",t.facilityTypeId.toString())),null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityByFacilityTypeId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityByFacilityTypeId(t){return this.getApartmentFacilityByFacilityTypeIdResponse(t).pipe(Object(s.a)(t=>t.body))}addApartmentFacilityResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/addApartmentFacility",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}addApartmentFacility(t){return this.addApartmentFacilityResponse(t).pipe(Object(s.a)(t=>t.body))}updateApartmentFacilityResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/updateApartmentFacility",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}updateApartmentFacility(t){return this.updateApartmentFacilityResponse(t).pipe(Object(s.a)(t=>t.body))}deleteApartmentFacilityResponse(t){let e=this.newParams(),a=new i.g;null!=t.deleteBy&&(e=e.set("deleteBy",t.deleteBy.toString())),null!=t.apartmentFacilityId&&(e=e.set("apartmentFacilityId",t.apartmentFacilityId.toString()));let n=new i.i("POST",this.rootUrl+"/api/Facility/deleteApartmentFacility",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}deleteApartmentFacility(t){return this.deleteApartmentFacilityResponse(t).pipe(Object(s.a)(t=>t.body))}updateApartmentFacilityAttachmentResponse(t){let e=this.newParams(),a=new i.g,n=null,p=new FormData;n=p,null!=t.file&&p.append("file",t.file),null!=t.description&&(e=e.set("description",t.description.toString())),null!=t.apartmentFacilityId&&(e=e.set("apartmentFacilityId",t.apartmentFacilityId.toString())),null!=t.addBy&&(e=e.set("addBy",t.addBy.toString()));let l=new i.i("POST",this.rootUrl+"/api/Facility/updateApartmentFacilityAttachment",n,{headers:a,params:e,responseType:"json"});return this.http.request(l).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}updateApartmentFacilityAttachment(t){return this.updateApartmentFacilityAttachmentResponse(t).pipe(Object(s.a)(t=>t.body))}getAllApartmentFacilityRefundsResponse(){let t=this.newParams(),e=new i.g,a=new i.i("GET",this.rootUrl+"/api/Facility/getAllApartmentFacilityRefunds",null,{headers:e,params:t,responseType:"json"});return this.http.request(a).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getAllApartmentFacilityRefunds(){return this.getAllApartmentFacilityRefundsResponse().pipe(Object(s.a)(t=>t.body))}getApartmentFacilityRefundsByApartmentIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityRefundsByApartmentId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityRefundsByApartmentId(t){return this.getApartmentFacilityRefundsByApartmentIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityRefundsByApartmentIdStatusResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.active&&(e=e.set("active",t.active.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityRefundsByApartmentIdStatus",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityRefundsByApartmentIdStatus(t){return this.getApartmentFacilityRefundsByApartmentIdStatusResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityRefundsByFacilityIdResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.apartmentFacilityId&&(e=e.set("apartmentFacilityId",t.apartmentFacilityId.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityRefundsByFacilityId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityRefundsByFacilityId(t){return this.getApartmentFacilityRefundsByFacilityIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityRefundByIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentFacilityRefundId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityRefundById",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityRefundById(t){return this.getApartmentFacilityRefundByIdResponse(t).pipe(Object(s.a)(t=>t.body))}addApartmentFacilityRefundResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/addApartmentFacilityRefund",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}addApartmentFacilityRefund(t){return this.addApartmentFacilityRefundResponse(t).pipe(Object(s.a)(t=>t.body))}updateApartmentFacilityRefundResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/updateApartmentFacilityRefund",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}updateApartmentFacilityRefund(t){return this.updateApartmentFacilityRefundResponse(t).pipe(Object(s.a)(t=>t.body))}deleteApartmentFacilityRefundResponse(t){let e=this.newParams(),a=new i.g;null!=t.deleteBy&&(e=e.set("deleteBy",t.deleteBy.toString())),null!=t.apartmentFacilityRefundId&&(e=e.set("apartmentFacilityRefundId",t.apartmentFacilityRefundId.toString()));let n=new i.i("POST",this.rootUrl+"/api/Facility/deleteApartmentFacilityRefund",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}deleteApartmentFacilityRefund(t){return this.deleteApartmentFacilityRefundResponse(t).pipe(Object(s.a)(t=>t.body))}getAllApartmentFacilitySlotsResponse(){let t=this.newParams(),e=new i.g,a=new i.i("GET",this.rootUrl+"/api/Facility/getAllApartmentFacilitySlots",null,{headers:e,params:t,responseType:"json"});return this.http.request(a).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getAllApartmentFacilitySlots(){return this.getAllApartmentFacilitySlotsResponse().pipe(Object(s.a)(t=>t.body))}getApartmentFacilitySlotsByApartmentIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilitySlotsByApartmentId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilitySlotsByApartmentId(t){return this.getApartmentFacilitySlotsByApartmentIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilitySlotsByApartmentIdStatusResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.active&&(e=e.set("active",t.active.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilitySlotsByApartmentIdStatus",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilitySlotsByApartmentIdStatus(t){return this.getApartmentFacilitySlotsByApartmentIdStatusResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilitySlotsByFacilityIdResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.apartmentFacilityId&&(e=e.set("apartmentFacilityId",t.apartmentFacilityId.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilitySlotsByFacilityId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilitySlotsByFacilityId(t){return this.getApartmentFacilitySlotsByFacilityIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilitySlotsByIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentFacilitySlotId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilitySlotsById",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilitySlotsById(t){return this.getApartmentFacilitySlotsByIdResponse(t).pipe(Object(s.a)(t=>t.body))}addApartmentFacilitySlotResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/addApartmentFacilitySlot",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}addApartmentFacilitySlot(t){return this.addApartmentFacilitySlotResponse(t).pipe(Object(s.a)(t=>t.body))}updateApartmentFacilitySlotResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/updateApartmentFacilitySlot",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}updateApartmentFacilitySlot(t){return this.updateApartmentFacilitySlotResponse(t).pipe(Object(s.a)(t=>t.body))}deleteApartmentFacilitySlotResponse(t){let e=this.newParams(),a=new i.g;null!=t.deleteBy&&(e=e.set("deleteBy",t.deleteBy.toString())),null!=t.apartmentFacilityBookingId&&(e=e.set("apartmentFacilityBookingId",t.apartmentFacilityBookingId.toString()));let n=new i.i("POST",this.rootUrl+"/api/Facility/deleteApartmentFacilitySlot",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}deleteApartmentFacilitySlot(t){return this.deleteApartmentFacilitySlotResponse(t).pipe(Object(s.a)(t=>t.body))}getAllApartmentFacilityBookingsResponse(){let t=this.newParams(),e=new i.g,a=new i.i("GET",this.rootUrl+"/api/Facility/getAllApartmentFacilityBookings",null,{headers:e,params:t,responseType:"json"});return this.http.request(a).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getAllApartmentFacilityBookings(){return this.getAllApartmentFacilityBookingsResponse().pipe(Object(s.a)(t=>t.body))}getApartmentFacilityBookingsByApartmentIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityBookingsByApartmentId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityBookingsByApartmentId(t){return this.getApartmentFacilityBookingsByApartmentIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityBookingsByApartmentIdStatusResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.active&&(e=e.set("active",t.active.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityBookingsByApartmentIdStatus",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityBookingsByApartmentIdStatus(t){return this.getApartmentFacilityBookingsByApartmentIdStatusResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityBookingsByFacilityIdResponse(t){let e=this.newParams(),a=new i.g;null!=t.apartmentId&&(e=e.set("apartmentId",t.apartmentId.toString())),null!=t.apartmentFacilityId&&(e=e.set("apartmentFacilityId",t.apartmentFacilityId.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityBookingsByFacilityId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityBookingsByFacilityId(t){return this.getApartmentFacilityBookingsByFacilityIdResponse(t).pipe(Object(s.a)(t=>t.body))}getApartmentFacilityBookingsByFacilityBookingIdResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("apartmentFacilityBookingId",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/getApartmentFacilityBookingsByFacilityBookingId",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}getApartmentFacilityBookingsByFacilityBookingId(t){return this.getApartmentFacilityBookingsByFacilityBookingIdResponse(t).pipe(Object(s.a)(t=>t.body))}addApartmentFacilityBookingResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/addApartmentFacilityBooking",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}addApartmentFacilityBooking(t){return this.addApartmentFacilityBookingResponse(t).pipe(Object(s.a)(t=>t.body))}updateApartmentFacilityBookingResponse(t){let e=this.newParams(),a=new i.g,n=null;n=t;let p=new i.i("POST",this.rootUrl+"/api/Facility/updateApartmentFacilityBooking",n,{headers:a,params:e,responseType:"json"});return this.http.request(p).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}updateApartmentFacilityBooking(t){return this.updateApartmentFacilityBookingResponse(t).pipe(Object(s.a)(t=>t.body))}deleteApartmentFacilityBookingResponse(t){let e=this.newParams(),a=new i.g;null!=t.deleteBy&&(e=e.set("deleteBy",t.deleteBy.toString())),null!=t.apartmentFacilityBookingId&&(e=e.set("apartmentFacilityBookingId",t.apartmentFacilityBookingId.toString()));let n=new i.i("POST",this.rootUrl+"/api/Facility/deleteApartmentFacilityBooking",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}deleteApartmentFacilityBooking(t){return this.deleteApartmentFacilityBookingResponse(t).pipe(Object(s.a)(t=>t.body))}GetPCApartmentFacilityResponse(t){let e=this.newParams(),a=new i.g;null!=t&&(e=e.set("ApartmentID",t.toString()));let n=new i.i("GET",this.rootUrl+"/api/Facility/GetPCApartmentFacility",null,{headers:a,params:e,responseType:"json"});return this.http.request(n).pipe(Object(r.a)(t=>t instanceof i.j),Object(s.a)(t=>t))}GetPCApartmentFacility(t){return this.GetPCApartmentFacilityResponse(t).pipe(Object(s.a)(t=>t.body))}}return t.getAllApartmentFacilitiesPath="/api/Facility/getAllApartmentFacilities",t.getApartmentFacilitiesByApartmentIdPath="/api/Facility/getApartmentFacilitiesByApartmentId",t.getApartmentFacilitiesByApartmentIdStatusPath="/api/Facility/getApartmentFacilitiesByApartmentIdStatus",t.getApartmentFacilityByFacilityIdPath="/api/Facility/getApartmentFacilityByFacilityId",t.getApartmentFacilityByCautionDepositPath="/api/Facility/getApartmentFacilityByCautionDeposit",t.getApartmentFacilityByFacilityTypeIdPath="/api/Facility/getApartmentFacilityByFacilityTypeId",t.addApartmentFacilityPath="/api/Facility/addApartmentFacility",t.updateApartmentFacilityPath="/api/Facility/updateApartmentFacility",t.deleteApartmentFacilityPath="/api/Facility/deleteApartmentFacility",t.updateApartmentFacilityAttachmentPath="/api/Facility/updateApartmentFacilityAttachment",t.getAllApartmentFacilityRefundsPath="/api/Facility/getAllApartmentFacilityRefunds",t.getApartmentFacilityRefundsByApartmentIdPath="/api/Facility/getApartmentFacilityRefundsByApartmentId",t.getApartmentFacilityRefundsByApartmentIdStatusPath="/api/Facility/getApartmentFacilityRefundsByApartmentIdStatus",t.getApartmentFacilityRefundsByFacilityIdPath="/api/Facility/getApartmentFacilityRefundsByFacilityId",t.getApartmentFacilityRefundByIdPath="/api/Facility/getApartmentFacilityRefundById",t.addApartmentFacilityRefundPath="/api/Facility/addApartmentFacilityRefund",t.updateApartmentFacilityRefundPath="/api/Facility/updateApartmentFacilityRefund",t.deleteApartmentFacilityRefundPath="/api/Facility/deleteApartmentFacilityRefund",t.getAllApartmentFacilitySlotsPath="/api/Facility/getAllApartmentFacilitySlots",t.getApartmentFacilitySlotsByApartmentIdPath="/api/Facility/getApartmentFacilitySlotsByApartmentId",t.getApartmentFacilitySlotsByApartmentIdStatusPath="/api/Facility/getApartmentFacilitySlotsByApartmentIdStatus",t.getApartmentFacilitySlotsByFacilityIdPath="/api/Facility/getApartmentFacilitySlotsByFacilityId",t.getApartmentFacilitySlotsByIdPath="/api/Facility/getApartmentFacilitySlotsById",t.addApartmentFacilitySlotPath="/api/Facility/addApartmentFacilitySlot",t.updateApartmentFacilitySlotPath="/api/Facility/updateApartmentFacilitySlot",t.deleteApartmentFacilitySlotPath="/api/Facility/deleteApartmentFacilitySlot",t.getAllApartmentFacilityBookingsPath="/api/Facility/getAllApartmentFacilityBookings",t.getApartmentFacilityBookingsByApartmentIdPath="/api/Facility/getApartmentFacilityBookingsByApartmentId",t.getApartmentFacilityBookingsByApartmentIdStatusPath="/api/Facility/getApartmentFacilityBookingsByApartmentIdStatus",t.getApartmentFacilityBookingsByFacilityIdPath="/api/Facility/getApartmentFacilityBookingsByFacilityId",t.getApartmentFacilityBookingsByFacilityBookingIdPath="/api/Facility/getApartmentFacilityBookingsByFacilityBookingId",t.addApartmentFacilityBookingPath="/api/Facility/addApartmentFacilityBooking",t.updateApartmentFacilityBookingPath="/api/Facility/updateApartmentFacilityBooking",t.deleteApartmentFacilityBookingPath="/api/Facility/deleteApartmentFacilityBooking",t.GetPCApartmentFacilityPath="/api/Facility/GetPCApartmentFacility",t.ngInjectableDef=l.ec({factory:function(){return new t(l.fc(p.a),l.fc(i.c))},token:t,providedIn:"root"}),t})()},UtLt:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return p}));var i=a("8Y7J"),n=(a("4D9t"),a("QQfA"),a("Tq4R"),a("bMPK"),a("EFU/"),a("SVse"),i.Cb({encapsulation:0,styles:[""],data:{}}));function p(t){return i.ac(2,[],null,null)}}}]);
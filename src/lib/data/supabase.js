import supabase from "./db";
import { pageData, pageCont, pageDb } from "../components/";
const getPage = async (index) => {
   let { data, error } = await supabase.from('appData').select().eq('p_id', index)
   return data;        
}
const getContent = async (index) => {
    let { data, error } = await supabase.from('appData').select().eq('p_id', index)
    return data;        
}
const getPages = async () => {
   let { data, error } = await supabase.from("appData").select();
   data.sort(function (a, b) {
       return a.od - b.od;
   });
   return data;
};

const loadPage = async (index) => {
    let data = await getPage(index);
    data.sort(function (a, b) {
        return a.content_id - b.content_id;
        });
    pageData.set(data);
    return data;
};
const loadCont = async (index) => {
    let data = await getContent(index);
    data.sort(function (a, b) {
        return a.content_id - b.content_id;
        });
    pageCont.set(data);
    return data;
};
const loadData = async () => {
    let data = await getPages();
    data.sort(function (a, b) {
   return a.content_id - b.content_id;
   });
    pageDb.set(data);
    return data;
};
export {getPage, getContent, getPages};
export {loadData, loadPage, loadCont};
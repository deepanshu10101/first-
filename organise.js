let fs=require('fs');
 let path =require('path');
 let types = {
     media: ["mp4", "mkv", "mp3"],
     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
     app: ['exe', 'dmg', 'pkg', "deb"],
     pictures: ['png','jpg','jpeg']
 }
function organise(srcPath){
let entities=fs.readdirSync(srcPath);
let organiseFolder=path.join(srcPath,'organisedFiles');

if(!fs.existsSync(organiseFolder)){
    fs.mkdirSync(organiseFolder);
}

for(let i=0;i<entities.length;i++)
{
    let file=entities[i];
    if(fs.lstatSync(file).isFile())
    {
       let type=checkType(file);
       let typeFolder=path.join(organiseFolder,type);
        if(!fs.existsSync(typeFolder))
        {
            fs.mkdirSync(typeFolder);
        }

        let src=path.join(srcPath,entities[i]);
        let dest=path.join(typefolder,entities[i]);
        fs.copyFileSync(src,dest);
    }
}



}

functon checkType(file)
{
    for(let type in ntypes)
    {
        for(let ext of types[tye])
        {
            if(path.extname(file.split('.'))[1]==ext)
            {
                return type;
            }
        }
    }
    return 'others';
}
module.exports={
    organiseFn:organiseFn
}

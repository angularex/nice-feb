let Component = function(config : any){
    return function(TargetClass : any){
        let tc = new TargetClass();
        return class {
            title:string = tc.title;
            power:number = config.power;
            selector:string = config.selector;
            template:string = config.template;
        }
    }
}

@Component({
    power : 100,
    selector : "app-root",
    template : `
    <div>
        <h2>{{ title }}</h2>
        <input type="range" value={{ power }}>
        <ul>
            <li>List 1</li>
            <li>List 2</li>
            <li>List 3</li>
            <li>List 4</li>
            <li>List 5</li>
        </ul>
    </div>   
    `
})
class MyComp{
    title = "Welcome to Nice Pune";
}
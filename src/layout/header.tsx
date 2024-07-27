import {Toolbar} from "primereact/toolbar";
import {Button} from "primereact/button";
import {SplitButton} from "primereact/splitbutton";
import {Divider} from "primereact/divider";
import {IconField} from "primereact/iconfield";
import {InputIcon} from "primereact/inputicon";
import {InputText} from "primereact/inputtext";
import {Badge} from "primereact/badge";

const Header = () => {
    return (
        <Toolbar
            className="border-0 rounded-none"
            start={
                <div className="flex gap-2">
                    <Button size="large" icon="pi pi-bars" className="aspect-square" text/>
                    <Button size="large" icon="pi pi-bell"
                            className="aspect-square hidden md:flex justify-center items-center" text>
                    </Button>
                    <Button size="large" icon="pi pi-heart"
                            className="aspect-square hidden md:flex justify-center items-center" text/>
                </div>
            }
            center={
                <IconField iconPosition="left" className="hidden md:block">
                    <InputIcon className="pi pi-search"/>
                    <InputText placeholder="Search"/>
                </IconField>
            }
            end={
                <div className="flex gap-2 items-center text-3xl">
                    <SplitButton
                        label={'test@gmail.com'}
                        icon="pi pi-user"
                        model={[
                            {
                                icon: 'pi pi-sign-out',
                                label: 'logout',
                            }
                        ]}
                        rounded outlined/>
                </div>
            }
        />
    )
}

export default Header;

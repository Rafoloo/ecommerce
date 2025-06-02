import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Home(){
    return ( 
            <div>
                <Textarea placeholder="digite aqui"></Textarea>
                <Button variant="elevated" className="mt-4">
                    Clique aqui
                </Button>
            </div>
        );
}


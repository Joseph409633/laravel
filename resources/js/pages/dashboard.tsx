import { Head } from '@inertiajs/react';
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dashboard } from '@/routes';

export default function Dashboard() {

    return (
        <>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                {/*Dividimos en 2 si es movil y en 4 si es pc.*/}
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total proyectos</CardTitle>
                        </CardHeader>
                        <CardContent>12</CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                             <CardTitle>Tareas Pendientes</CardTitle>
                        </CardHeader>
                        <CardContent>8</CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Completadas</CardTitle>
                        </CardHeader>
                        <CardContent>12</CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Miembros</CardTitle>
                        </CardHeader>
                        <CardContent>8</CardContent>
                    </Card>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Proyectos Recientes</CardTitle>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Total: 3
                            </Badge>
                        </CardHeader>
                        <Card className="p-4">Scraper regcon Python</Card>
                        <Card className="p-4">Crear web de alimentación Laravel</Card>
                        <Card className="p-4">Crear bot de ventas</Card>
                    </Card>
                    <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tareas urgentes</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                            Total: 2
                        </Badge>
                    </CardHeader>
                        <Card className="p-4">Aprender Python</Card>
                        <Card className="p-4">Terminar deberes</Card>
                    </Card>
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};

import Headler from '@/components/Headler/headler';
import Note from '@/components/NotePage/NotePage';

const notePage = () => {
    return (
        <div>
            <main>
                <header>
                    <Headler />
                </ header>

                <section>
                    <div>
                        <Note />
                    </div>
                </section>
            </main>

        </div>
    )
}
export default notePage;